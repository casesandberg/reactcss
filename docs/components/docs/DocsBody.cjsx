'use strict'

React = require('react')
ReactCSS = require('reactcss')

Container = require('../layout/Container')
Grid = require('../layout/Grid')
Code = require('../common/Code')
{ Tile } = require('react-material-design')
Markdown = require('../common/Markdown')
Animate = require('../common/Animate')

docs = require('../../docs')
Remarkable = require('remarkable')
md = new Remarkable()
sampleComponent = require('../../docs/00-sample-component.md')



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

      animate:
        marginTop: '-240px'
        paddingBottom: '40px'

      inner:
        padding: '16px'

      file:
        paddingBottom: '60px'

      title:
        fontSize: '32px'
        fontWeight: '200'
        color: 'rgba(0,0,0,.67)'
        paddingBottom: '20px'

      subtitle:
        fontSize: '24px'
        fontWeight: '400'
        color: 'rgba(0,0,0,.67)'

  render: ->
    <div is="docsBody">
      <Container>
        <Grid uneven>

          <div is="sidebar">
            { for fileName, file of docs
                sectionNumber = if fileName.split('-')[0].indexOf('.') is -1 then fileName.split('-')[0] else ''
                <Tile key={ fileName } condensed>
                  <div>{ sectionNumber }</div>

                  <div>{ /title: (.+)/.exec(file)[1] }</div>
                </Tile> }
          </div>

          <div is="content">

            <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
              <div is="animate">
                <Markdown>{ sampleComponent }</Markdown>
              </div>
            </Animate>

            { for fileName, file of docs
                regex = /---[\s\S]*?title: (.+)[\s\S]*?---([\s\S]*)/.exec(file)
                title = regex[1]
                body = regex[2]
                if body.trim()
                  <div is="file" key={ fileName }>
                    <div is="subtitle">{ title }</div>
                    <Markdown>{ body }</Markdown>
                  </div>
                else
                  <div is="title" key={ fileName }>{ title }</div> }
          </div>

        </Grid>

      </Container>
    </div>
