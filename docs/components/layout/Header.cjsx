'use strict'

React = require('react')
ReactCSS = require('reactcss')

{ Tabs } = require('react-material-design')



module.exports = class Header extends ReactCSS.Component

  @contextTypes:
    mobile: React.PropTypes.bool

  classes: ->
    'default':
      header:
        padding: '14px'
        display: 'flex'
        justifyContent: 'space-between'

      logo:
        color: 'rgba(255, 255, 255, .87)'

      nav:
        float: 'right'
        color: 'rgba(255, 255, 255, .87)'
        textTransform: 'uppercase'
        overflow: 'hidden'

      Tabs:
        align: 'center'

    'mobile-header':
      header:
        display: 'block'

      logo:
        float: 'left'

      nav:
        float: 'right'

  styles: -> @css
    'mobile-header': @context.mobile

  render: ->
    <div is="header">
      <div is="logo">ReactCSS</div>

      <div is="nav">
        <Tabs is="Tabs" selectedTab={ if @props.display is 'about' then 0 else if @props.display is 'documentation' then 1 else 0 } tabs={[{ label: 'About', onClick: '/' }, { label: 'Documentation', onClick: '/documentation' }, { label: 'Github', selectable: false; onClick: 'https://github.com/casesandberg/reactcss', newTab: true }]} />
      </div>
    </div>
