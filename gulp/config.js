import gutil from 'gutil'

export default {
  src: {
    js: './src/**/*.js',
  },
  tests: './test/**/*.js',

  dist: {
    dir: 'lib',
  },

  onError: gutil.log,
}
