'use strict'

React = require('react')
_ = require('lodash')


module.exports = class Link extends React.Component

  # @propTypes =
  #   onClick: React.PropTypes.oneOfType(
  #     React.PropTypes.string,
  #     React.PropTypes.func
  #   )

  @propExamples =
    onClick:
      type: 'oneOfType'
      like: ['http://some.url/']

    newTab:
      type: 'bool'
      like: [true, false]

  @defaultProps =
    newTab: false

  handleClick: (e) => @props.onClick?(e)

  render: ->
    if _.isString(@props.onClick)
      <a style={ textDecoration: 'none' } href={ @props.onClick } target={ '_blank' if @props.newTab }>{ @props.children }</a>
    else
      <a style={ textDecoration: 'none' } onClick={ @handleClick }>{ @props.children }</a>
