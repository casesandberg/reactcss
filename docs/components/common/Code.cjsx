'use strict'

React = require('react')
ReactCSS = require('reactcss')
markdown = require('../../helpers/markdown')




{ Raised, Tabs, Tile } = require('react-material-design')



module.exports = class Code extends ReactCSS.Component

  @contextTypes:
    mobile: React.PropTypes.bool

  @propTypes =
    files: React.PropTypes.array

  classes: ->
    'default':
      shortCodeBlock:
        display: 'inline-block'

      shortCode:
        padding: '14px 16px'

      head:
        borderRadius: '2px 2px 0 0'
        background: '#fafafa'

      files:
        display: 'inline-block'

      Files:
        align: 'none'
        color: '#666'

      center:
        fontFamily: 'Monaco'
        fontSize: '14px'
        lineHeight: '19px'
        color: 'rgba(0,0,0,.77)'

      numbers:
        fontSize: '14px'
        lineHeight: '19px'
        display: 'inline-block'
        textAlign: 'right'
        color: 'rgba(0,0,0,.20)'
        userSelect: 'none'

    'condensed':
      Tile:
        condensed: true

      center:
        paddingTop: '16px'
        paddingBottom: '16px'
        fontSize: '13px'
        lineHeight: '15px'

      numbers:
        paddingTop: '16px'
        fontSize: '13px'
        lineHeight: '15px'

  styles: -> @css
    'condensed': @context.mobile

  render: ->
    code = markdown.getBody(@props.file)

    args = markdown.getArgs(@props.file)

    colorCoded = markdown.renderCode("```\n#{ code }```").trim()
    lines = colorCoded.split('\n').length

    if lines is 2
      <div is="shortCodeBlock">
        <Raised>
          <div is="shortCode" className="rendered" dangerouslySetInnerHTML={ __html: _.unescape(colorCoded) } />
        </Raised>
      </div>

    else
      <Raised>
        <style>{"
          .rendered{
            color: #607D8B; // blue grey 500
          }
          .rendered .hljs-comment {
            color: #B0BEC5; // blue grey 200
          }
          .rendered .hljs-keyword{
            color: #EF9A9A;  // red 200
          }
          .rendered .hljs-string{
            color: #689F38; // light green 700
          }
          .rendered .hljs-title{
            color: #37474F; // blue grey 800
            text-decoration: underline;
          }
        "}</style>


        { if args.fileName
            <div is="head">
              <div is="files">
                <Tabs is="Files" tabs={[ args.fileName ]} />
              </div>
            </div> }
        <Tile is="Tile">
          <div is="numbers">
            { for line in [1 ... lines]
                <div key={ line } is="line">{ line }</div> }
          </div>
          <div is="center">
            <style>{"
              .rendered pre{
                margin: 0;
              }
              .rendered p{
                margin: 0;
              }
            "}</style>
            <div className="rendered" dangerouslySetInnerHTML={ __html: colorCoded } />
          </div>
        </Tile>
      </Raised>
