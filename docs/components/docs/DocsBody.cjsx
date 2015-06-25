'use strict'

React = require('react')
ReactCSS = require('reactcss')

Container = require('../layout/Container')
Grid = require('../layout/Grid')
Code = require('../common/Code')
{ Tile } = require('react-material-design')
Markdown = require('../common/Markdown')

docs = require('../../docs')
Remarkable = require('remarkable')
md = new Remarkable()



module.exports = class DocsBody extends ReactCSS.Component

  classes: ->
    'default':
      docsBody: {}

      sidebar:
        width: '200px'

      content:
        width: '640px'
        fontSize: '17px'
        lineHeight: '24px'
        color: 'rgba(0,0,0,.57)'

      inner:
        padding: '16px'

  render: ->
    <div is="docsBody">
      <Container>
        <Grid uneven>

          <div is="sidebar">
            { for fileName, file of docs
                <Tile key={ fileName }>
                  <div></div>

                  <div>{ /title: (.+)/.exec(file)[1] }</div>
                </Tile> }
          </div>

          <div is="content">
            { for fileName, file of docs
                <Markdown key={ fileName }>{ /---[\s\S]*?---([\s\S]*)/.exec(file)[1] }</Markdown> }
          </div>

        </Grid>

      </Container>
    </div>
