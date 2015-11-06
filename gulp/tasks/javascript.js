import gulp from 'gulp';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';

import config from '../config';

gulp.task('js:dist', () => {
  return gulp.src(config.src.js)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.dir));
});
