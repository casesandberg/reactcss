'use strict'

import React from 'react'
import markdown from '../../helpers/markdown'

import Code from './Code'

export class Markdown extends React.Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    let children = this.props.children

    // codeblocks on top of eachother
    children = children.replace('```\n```', '======')

    let newLines = children

    const codes = []
    markdown.isCode(children).map((codeBlock, i) => {
      newLines = newLines.replace(codeBlock[1], '|Code:#{ i }|')
      codes[i] = <Code file={ codeBlock[2] } condensed={ this.props.condensed } />
      return codeBlock
    })

    return (
      <div>
        <style>{ `
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
        ` }</style>

        { newLines.split('\n').map((line, i) => {
          if (markdown.isCodeBlock(line)) {
            return <div key={ i }>{ codes[markdown.codeNumber(line)] }</div>
          }

          return (
            <div
              key={ i }
              className="markdown"
              dangerouslySetInnerHTML={ { __html: markdown.render(line) } }
            />
          )
        }) }
      </div>
    )
  }
}

export default Markdown
