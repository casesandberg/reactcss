import gulp from 'gulp'
import uglify from 'gulp-uglify'
import babel from 'gulp-babel'
import coffee from 'gulp-cjsx'

import config from '../config'

gulp.task('js:dist', () => {
  return gulp.src(config.src.js)
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.dir))
})

gulp.task('js:modules', () => {
  return gulp.src('./modules/react-material-design/src/**/*.cjsx')
    .pipe(coffee())
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest('./modules/react-material-design/lib'))
})
