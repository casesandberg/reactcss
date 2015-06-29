'use strict'

React = require('react')
ReactCSS = require('reactcss')
Remarkable = require('remarkable')
md = new Remarkable()
markdown = require('../../helpers/markdown')

Code = require('./Code')



module.exports = class Markdown extends ReactCSS.Component

  classes: ->
    'default':
      markdown: {}

  shouldComponentUpdate: ->
    return false

  render: ->
    newLines = @props.children
    codes = []
    for codeBlock, i in markdown.isCode(@props.children)
      newLines = newLines.replace(codeBlock[1], "|Code:#{ i }|")
      codes[i] = <Code file={ codeBlock[2] } condensed={ @props.condensed }/>

    <div>
      <style>{"
        .markdown code{
          background: #ddd;
          padding: 1px 5px 3px;
          border-radius: 2px;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,.03);
          font-size: 85%;
        }
      "}</style>


      { for line, i in newLines.split('\n')
          if markdown.isCodeBlock(line)
            <div key={ i }>{ codes[ markdown.codeNumber(line) ] }</div>
          else
            <div key={ i } is="markdown" className="markdown" dangerouslySetInnerHTML={ __html: md.render(line) } /> }

    </div>
