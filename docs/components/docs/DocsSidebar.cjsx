'use strict'

React = require('react')
ReactCSS = require('reactcss')

{ Tile } = require('react-material-design')



module.exports = class DocsSidebar extends ReactCSS.Component

  classes: ->
    'default':
      sidebar:
        paddingTop: '20px'

      number:
        fontSize: '14px'
        color: 'rgba(0, 0, 0, .27)'
        fontWeight: 'bold'

      link:
        fontSize: '14px'
        textDecoration: 'none'

      titleActive:
        Extend: 'link'
        fontWeight: 'bold'
        color: '#4A90E2'

      titleInactive:
        Extend: 'link'
        fontWeight: 'bold'
        color: 'rgba(0, 0, 0, .57)'

      active:
        Extend: 'link'
        color: '#4A90E2'

      inactive:
        Extend: 'link'
        color: 'rgba(0, 0, 0, .57)'

    'fixed':
      sidebar:
        top: '0'
        position: 'fixed'

  render: ->
    <div is="sidebar">

      { for fileName, file of @props.files
          id = /id: (.+)/.exec(file)[1]
          title = /title: (.+)/.exec(file)[1]
          sectionNumber = if fileName.split('-')[0].indexOf('.') is -1 then fileName.split('-')[0] else ''
          <Tile key={ fileName } condensed>
            <div is="number">{ sectionNumber }</div>

            { if sectionNumber
                if @props.active is id
                    <a is="titleActive" href={ "##{ id }" }>{ title }</a>
                  else
                    <a is="titleInactive" href={ "##{ id }" }>{ title }</a>
              else
                if @props.active is id
                    <a is="active" href={ "##{ id }" }>{ title }</a>
                  else
                    <a is="inactive" href={ "##{ id }" }>{ title }</a> }

          </Tile> }

    </div>
