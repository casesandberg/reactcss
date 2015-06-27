'use strict'



###
ReactCSS
###
module.exports = css =
  Component: require('./Component')
  inline: require('./inline')
  mixin: { css: require('./inline') }
