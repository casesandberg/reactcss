'use strict';

require('babel-core/register');

var gulp = require('gulp');
var gutil = require('gutil');

// Test
var mocha = require('gulp-mocha');

// Bundle
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

// Docs
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var dev = require('./webpack.dev.js');
var prod = require('./webpack.prod.js');

gulp.task('test-once', function() {
  return gulp.src('./test/**/*.js')
    .pipe(mocha({ compilers: { js: babel } }))
    .on('error', gutil.log);
});

gulp.task('test', function(done) {
  gulp.watch(['./test/**/*.js','./src/**/*.js'], ['test-once']);
});

gulp.task('lib', function() {
  return gulp.src('./src/**/*.js')
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('lib'));
});

gulp.task('docs-prod', function(done) {
  webpack(prod, function(err, stats) {
    if (err) {
      throw new Error(err);
    }

    done();
  });
});

gulp.task('docs', function(done) {
  done();
  return new WebpackDevServer(webpack(dev), {
    publicPath: dev.output.publicPath,
    hot: true,
    stats: {
      cached: false,
      cachedAssets: false,
      exclude: ['node_modules', 'components'],
    },
  }).listen(2570, 'localhost', function(err, result) {
    if (err) {
      return console.log(err);
    } else {
      return console.log('Webpack - http://localhost:2570/');
    }
  });
});

gulp.task('default', ['test']);
