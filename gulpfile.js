var gulp = require('gulp');

// Test
var mocha = require('gulp-mocha');

// Bundle
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
require('coffee-script/register');
var babel = require('gulp-babel');

// Docs
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');


config = {
  docs: {
    entry: ['webpack-dev-server/client?http://localhost:2570', 'webpack/hot/dev-server', './docs/index.coffee'],
    output: {
      path: path.join(__dirname, 'docs/build'),
      filename: 'bundle.js',
      publicPath: 'http://localhost:2570/docs/build/'
    },
    module: {
      loaders: [
        {
          exclude: /node_modules/,
          test: /\.js$/,
          loaders: ['react-hot-loader']
        }, {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader', 'react-map-styles']
        }, {
          test: /\.coffee$/,
          loaders: ['coffee-loader']
        }, {
          test: /\.cjsx$/,
          loaders: ['react-hot-loader', 'coffee-jsx-loader', 'react-map-styles']
        }, {
          test: /\.css$/,
          loaders: [ 'style-loader', 'css-loader' ]
        }, {
          test: /\.md$/,
          loaders: [ 'html-loader' ]
        }
      ]
    },
    resolve: {
      alias: {
        'reactcss': path.resolve(__dirname, './lib/react-css.js')
      },
      extensions: ['', '.js', '.coffee', '.jsx', '.cjsx'],
      fallback: [path.resolve(__dirname, './modules')]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({ quiet: true }),
      new webpack.NoErrorsPlugin()
    ],
    devtool: 'eval',
    quiet: true
  }
};


gulp.task('test', function(){
  return gulp.src('./test/**/*.coffee')
             .pipe(mocha());
});

gulp.task('bundle', function() {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('lib'));
});

gulp.task('static', function(done){

  prodConfig = {
    entry: { home:'./docs/index.coffee', documentation: './docs/documentation/index.coffee' },
    output: {
      path: path.join(__dirname, 'docs/build'),
      filename: '[name].js',
      publicPath: '/build/'
    },
    module: {
      loaders: [{
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ['jsx-loader', 'babel-loader', 'react-map-styles']
        }, {
          test: /\.coffee$/,
          loaders: ['coffee-loader']
        }, {
          test: /\.cjsx$/,
          loaders: ['coffee-jsx-loader', 'react-map-styles']
        }, {
          test: /\.css$/,
          loaders: [ 'style-loader', 'css-loader' ]
        }, {
          test: /\.md$/,
          loaders: [ 'html-loader' ]
        }
      ]
    },
    resolve: {
      alias: {
        'reactcss': path.resolve(__dirname, './lib/react-css.js')
      },
      extensions: ['', '.js', '.coffee', '.jsx', '.cjsx'],
      fallback: [path.resolve(__dirname, './modules')]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.DedupePlugin(),
      // new webpack.optimize.UglifyJsPlugin({
      //   mangle: {
      //     except: ['exports', 'require']
      // },
      //   sourceMap: false,
      //   output: {comments: false}
      // }),
      new webpack.optimize.CommonsChunkPlugin("common.js")
    ],
    devtool: 'eval',
    quiet: true
  }

  webpack(prodConfig, function(err, stats){

    if(err) {
      throw new Error(err);
    }

    done();
  });
})

gulp.task('watch', function(done) {
  gulp.watch([ '**/*.coffee' ], [ 'test' ]);
});

gulp.task('docs', function(done) {
  done();
  return new WebpackDevServer(webpack(config.docs), {
    publicPath: config.docs.output.publicPath,
    hot: true,
    stats: {
      cached: false,
      cachedAssets: false,
      exclude: ['node_modules', 'components']
    }
  }).listen(2570, 'localhost', function(err, result) {
    if (err) {
      return console.log(err);
    } else {
      return console.log('webpack dev server listening at localhost:2570');
    }
  });
});

gulp.task('default', ['watch']);
