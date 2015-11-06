import gulp from 'gulp';
import mocha from 'gulp-mocha';
import babel from 'gulp-babel';

import config from '../config';

gulp.task('test:once', () => {
  return gulp.src(config.tests)
    .pipe(mocha({ compilers: { js: babel } }))
    .on('error', config.onError);
});

gulp.task('test', () => {
  gulp.watch([config.tests, config.src.js], ['test:once']);
});

gulp.task('default', ['test']);
