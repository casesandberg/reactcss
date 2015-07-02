'use strict'

React = require('react')
ReactCSS = require('reactcss')
markdown = require('../../helpers/markdown')

Code = require('./Code')



module.exports = class Markdown extends ReactCSS.Component

  classes: ->
    'default':
      markdown: {}

  shouldComponentUpdate: ->
    return false

  render: ->
    children = @props.children

    # codeblocks on top of eachother
    children = children.replace('```\n```', '======')

    newLines = children

    codes = []
    for codeBlock, i in markdown.isCode(children)
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
          vertical-align: bottom;
        }

        .docsBody p{
          margin: 15px 0;
        }

        .docsBody h1{
          font-size: 38px;
          font-weight: 200;
          color: rgba(0,0,0,.77);
          margin: 0;
          padding-top: 80px;
          padding-bottom: 10px;
        }

        .docsBody h2{
          font-size: 26px;
          line-height: 32px;
          font-weight: 200;
          color: rgba(0,0,0,.57);
          padding-top: 20px;
          margin-top: 20px;
          margin-bottom: 10px;
        }

        .docsBody h3{
          font-weight: normal;
          font-size: 20px;
          color: rgba(0,0,0,.67);
        }
      "}</style>


      { for line, i in newLines.split('\n')
          if markdown.isCodeBlock(line)
            <div key={ i }>{ codes[ markdown.codeNumber(line) ] }</div>
          else
            <div key={ i } is="markdown" className="markdown" dangerouslySetInnerHTML={ __html: markdown.render(line) } /> }

    </div>
