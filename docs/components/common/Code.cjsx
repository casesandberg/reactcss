'use strict'

React = require('react')
ReactCSS = require('reactcss')
Remarkable = require('remarkable')
hljs = require('highlight.js')
md = new Remarkable
  highlight: (str) ->
    try
      return hljs.highlightAuto(str).value
    catch err
      console.log err
_ = require('lodash')

require('../../../node_modules/highlight.js/styles/kimbie.dark.css')




{ Raised, Tabs, Tile } = require('react-material-design')



module.exports = class Code extends ReactCSS.Component

  @propTypes =
    files: React.PropTypes.array

  classes: ->
    'default':
      shortCodeBlock:
        display: 'inline-block'

      shortCode:
        padding: '14px 16px'

      head:
        borderRadius: '2px 2px 0 0'
        background: '#fafafa'

      files:
        display: 'inline-block'

      Files:
        align: 'none'
        color: '#666'

      center:
        fontFamily: 'Monaco'
        fontSize: '14px'
        lineHeight: '19px'
        color: 'rgba(0,0,0,.77)'

      numbers:
        fontSize: '14px'
        lineHeight: '19px'
        display: 'inline-block'
        textAlign: 'right'
        color: 'rgba(0,0,0,.20)'

  render: ->
    rendered = md.render("```\n#{ @props.files[0].js }```").trim()
    lines = rendered.split('\n').length

    if lines is 2
      <div is="shortCodeBlock">
        <Raised>
          <div is="shortCode" className="rendered" dangerouslySetInnerHTML={ __html: _.unescape(rendered) } />
        </Raised>
      </div>

    else
      <Raised>
        { if @props.files[0].fileName
            <div is="head">
              <div is="files">
                <Tabs is="Files" tabs={[ @props.files[0].fileName ]} />
              </div>
            </div> }
        <Tile>
          <div is="numbers">
            { for line in [1 ... lines]
                <div key={ line } is="line">{ line }</div> }
          </div>
          <div is="center">
            <style>{"
              .rendered pre{
                margin: 0;
              }
              .rendered p{
                margin: 0;
              }
            "}</style>
            <div className="rendered" dangerouslySetInnerHTML={ __html: _.unescape(rendered) } />
          </div>
        </Tile>
      </Raised>
