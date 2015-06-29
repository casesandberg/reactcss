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

  state:
    visible: ''
    files: {}
    sidebarFixed: false

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

  componentDidMount: ->
    window.addEventListener('scroll', @onScroll, false);

    files = {}
    for file in React.findDOMNode( @refs.files ).children
      files[file.offsetTop] = file.id

    @setState( files: files )


  componentWillUnmount: ->
    window.removeEventListener('scroll', @onScroll, false);

  onScroll: (e) =>
    # @changeSelection(e, @)
    top = e.srcElement.scrollingElement.scrollTop - 150

    sidebar = React.findDOMNode( @refs.DocsSidebar )
    sidebarTop = sidebar.offsetTop

    if 400 < top && @state.sidebarFixed is false
      @setState( sidebarFixed: true )

    if 370 > top && @state.sidebarFixed is true
      @setState( sidebarFixed: false )

  changeSelection: (e, _this) =>
    top = e.srcElement.scrollingElement.scrollTop - 150
    mostVisible = ''
    for offset, id of @state.files
      if offset < top
        mostVisible = id
    if mostVisible isnt @state.visible
      _this.setState( visible: mostVisible )


  render: ->
    <div is="docsBody" className="docsBody">
      <Container>
        <Grid uneven flex="1-3">

          <Animate inDelay={ 900 }>
            <DocsSidebar ref="DocsSidebar" files={ docs } active={ @state.visible } fixed={ @state.sidebarFixed } />
          </Animate>

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

            <div ref="files">

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

          </div>

        </Grid>

      </Container>
    </div>
