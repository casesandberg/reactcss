import gulp from 'gulp';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import dev from '../../webpack.dev.js';
import prod from '../../webpack.prod.js';

gulp.task('docs:dist', done => {
  webpack(prod, (err, stats) => {
    if (err) throw new Error(err);
    done();
  });
});

gulp.task('docs:dev', done => {
  done();
  return new WebpackDevServer(webpack(dev), {
    publicPath: dev.output.publicPath,
    hot: true,
    stats: {
      cached: false,
      cachedAssets: false,
      exclude: ['node_modules', 'components'],
    },
  }).listen(2570, 'localhost', (err, result) => {
    if (err) {
      return console.log(err);
    } else {
      return console.log('Webpack - http://localhost:2570/');
    }
  });
});

gulp.task('docs', ['docs:dev']);
