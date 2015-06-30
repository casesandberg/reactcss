'use strict'

React = require('react')
ReactCSS = require('reactcss')



module.exports = class Grid extends ReactCSS.Component

  @contextTypes:
    mobile: React.PropTypes.bool

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

    'flex-1-3':
      firstColumn:
        flex: '7'

      column:
        flex: '18'
        marginLeft: '20px'

    'mobile':
      grid:
        display: 'block'

      column:
        marginLeft: '0'

    'docs-mobile':
      firstColumn:
        display: 'none'

  styles: -> @css
    'mobile': @context.mobile
    'docs-mobile': @context.mobile && @props.flex is '1-3'

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
