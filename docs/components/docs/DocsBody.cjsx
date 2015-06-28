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
# sampleComponent = """
#                   ```
#                   var foo = 'bar';
#                   ```
#                   """



module.exports = class DocsBody extends ReactCSS.Component

  classes: ->
    'default':
      docsBody: {}

      content:
        fontSize: '17px'
        lineHeight: '24px'
        color: 'rgba(0,0,0,.57)'

      animate:
        marginTop: '-240px'
        paddingBottom: '40px'

      inner:
        padding: '16px'

      file:
        paddingBottom: '40px'

  render: ->
    <div is="docsBody" className="docsBody">
      <Container>
        <Grid uneven flex="1-3">

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

            <style>{"
              .docsBody h1{
                font-size: 32px;
                font-weight: 200;
                color: rgba(0,0,0,.67);
                margin-top: 0;
              }

              .docsBody h2{
                font-size: 24px;
                font-weight: 400;
                color: rgba(0,0,0,.67);
              }
            "}</style>

            { for fileName, file of docs
                regex = /---[\s\S]*?title: (.+)[\s\S]*?---([\s\S]*)/.exec(file)
                title = regex[1]
                body = regex[2]



                <div key={ fileName }>
                  { if fileName.split('-')[0].indexOf('.') is -1
                      <h1>{ title }</h1>
                    else
                      <h2>{ title }</h2> }

                  { if body.trim()
                      <div is="file">
                        <Markdown>{ body }</Markdown>
                      </div> }
                </div> }

          </div>

        </Grid>

      </Container>
    </div>
