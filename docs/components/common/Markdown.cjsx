'use strict'

React = require('react')
ReactCSS = require('reactcss')
Remarkable = require('remarkable')
md = new Remarkable()

Code = require('./Code')



module.exports = class Markdown extends ReactCSS.Component

  classes: ->
    'default':
      markdown: {}

  render: ->
    markdown = md.render(@props.children)
    lines = markdown

    codes = []
    count = 0

    reg = new RegExp(/<pre><code(.*)>([\s\S]*?)<\/code><\/pre>/g)

    while match = reg.exec(markdown)
      filename = undefined
      # if match[1]
      #   filename = /file[nN]ame:(.+?)"/.exec(match[1])[1]

      lines = lines.replace("<pre><code#{ match[1] }>#{ match[2].toString() }</code></pre>", "|Code:#{ count }|")
      codes[count] = <Code files={[{ js: match[2], fileName: filename }]} condensed={ @props.condensed }/>
      count++

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
      { for line, i in lines.split('\n')
          if line.indexOf('|Code:') > -1
            place = /\|Code:(.+?)\|/.exec(line)[1]

            <div key={ i }>{ codes[place] }</div>
          else
            <div key={ i } is="markdown" className="markdown" dangerouslySetInnerHTML={ __html: line } /> }

    </div>
