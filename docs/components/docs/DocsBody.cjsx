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
                { topmost = """
                            ```
                            // Include the library
                            var ReactCSS = require('reactcss');

                            // Extend ReactCSS inseat of React
                            class Component extends ReactCSS.Component{

                              classes: function(){
                                return{
                                  // Set a default style
                                  'default': {
                                    box: {
                                      background: '#eee'
                                    },
                                    title: {
                                      color: 'rgba(0, 0, 0, .87)'
                                    }
                                  },
                                  // Automatically activates if this.props.theme = 'dark'
                                  'theme-dark': {
                                    box: {
                                      background: '#333'
                                    },
                                    title: {
                                      color: 'rgba(255, 255, 255, .87)'
                                    }
                                  },
                                  'hovered': {
                                    box: {
                                      background: 'blue'
                                    },
                                    title: {
                                      color: 'rgba(255, 255, 255, .87)'
                                    }
                                  }
                                }
                              }

                              styles: function(){
                                return this.css({
                                  // Declare classes to conditionally activate
                                  'hovered': @state.hovered
                                })
                              }

                              render: function(){
                                return (
                                  // Attach styles using `is` with `react-map-styles`
                                  <div is\="box">
                                    <div is\="title">{ this.props.children }</div>
                                  </div>
                                )
                              }
                            }
                            ```
                            """
                <Markdown>{ topmost }</Markdown> }
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
