'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Grid extends ReactCSS.Component

  classes: ->
    'default':
      grid:
        display: 'flex'
        alignItems: 'stretch'
        justifyContent: 'space-between'

      column:
        flex: '1'
        marginLeft: '40px'

      firstColumn:
        flex: '1'

    'uneven':
      column:
        flex: 'none'

      firstColumn:
        flex: 'none'

  render: ->
    <div is="grid">

      { for child, i in @props.children

          if i is 0
            <div is="firstColumn" key={ i }>
              { child }
            </div>

          else
            <div is="column" key={ i }>
              { child }
            </div> }

    </div>
