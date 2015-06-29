'use strict'

React = require('react')
ReactCSS = require('reactcss')

Container = require('../layout/Container')
Grid = require('../layout/Grid')
Code = require('../common/Code')
{ Tile } = require('react-material-design')
Markdown = require('../common/Markdown')
Animate = require('../common/Animate')
DocsSidebar = require('./DocsSidebar')

docs = require('../../docs')
Remarkable = require('remarkable')
md = new Remarkable()
sampleComponent = require('../../docs/00-sample-component.md')



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

          <DocsSidebar files={ docs } active="getting-started-install" />

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
                margin: 0;
                padding-top: 20px;
              }

              .docsBody h2{
                font-size: 24px;
                font-weight: 400;
                color: rgba(0,0,0,.67);
                padding-top: 20px;
                margin-top: 0;
              }
            "}</style>

            { for fileName, file of docs
                regex = /---[\s\S]*?title: (.+)[\s\S]*?---([\s\S]*)/.exec(file)
                title = regex[1]
                body = regex[2]
                id = /id: (.+)/.exec(file)[1]


                <div key={ fileName } id={ id }>
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
