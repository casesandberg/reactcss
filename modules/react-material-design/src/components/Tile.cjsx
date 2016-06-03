'use strict'

React = require('react')
reactCSS = require('reactcss')

class Tile extends React.Component
  handleClick: (e) => @props.onClick(e) if @props.onClick?

  handleControlsClick: (e) => @props.onClick(e, @props.children) if @props.onClick?

  render: ->
    styles = reactCSS.default({
      'default':
        tile:
          fontSize: '16px'
          padding: '16px'
          display: 'flex'
          justifyContent: 'space-between'
          color: @props.color

        primary:
          display: 'flex'
          width: '100%'

        sidebar:
          minWidth: '56px'
          maxWidth: '56px'
          flexBasis: '56' # 72 minus 16

        content:
          background: 'none'
          flex: '1'
          maxWidth: '95%'

        secondary:
          flexBasis: '42'
          textAlign: 'center'

        sidebarIcon:
          marginTop: '-12px'
          marginLeft: '-12px'
          marginBottom: '-12px'

      'clickable':
        tile:
          cursor: 'pointer'

      'divider':
        tile:
          boxShadow: 'inset 0 -1px 0 rgba(0,0,0,.12)'

      'condensed':
        tile:
          paddingBottom: '0'
          paddingTop: '0'

        sidebar:
          minWidth: '28px'
          maxWidth: '28px'
          flexBasis: '28'

      'left-pad':
        tile:
          paddingLeft: '0'
    }, {
      'clickable': @props.onClick?
    }, @props)

    <div style={ styles.tile } onClick={ if @props.controls then @handleControlsClick else @handleClick }  className="flexbox-fix">

      { if Object.prototype.toString.call(@props.children) is '[object Array]'
          [ sidebar, content... ] = @props.children
          <div style={ styles.primary }className="flexbox-fix">
            <div style={ styles.sidebar } key={ "sidebar-#{ sidebar }" }>
              { if sidebar.type.name is 'Icon'
                  <div style={ styles.sidebarIcon }>
                    { sidebar }
                  </div>
                else
                  sidebar }
            </div>
            <div style={ styles.content } key={ "content-#{ content }" }>
              { for child, i in content
                <div key={ i }>
                  { child }
                </div> }
            </div>
          </div>
        else
          <div style={ styles.primary }>
            <div style={ styles.content }>{ @props.children }</div>
          </div> }

      { if @props.secondaryAction
        <div style={ styles.secondary }>
          { @props.secondaryAction }
        </div>
      }
    </div>

module.exports = Tile
