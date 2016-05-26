'use strict'

import React from 'react'
import reactCSS, { m } from 'reactcss'

export class Grid extends React.Component {

  static contextTypes = {
    mobile: React.PropTypes.bool,
  }

  render() {
    const styles = reactCSS({
      'default': {
        grid: {
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'space-between',
        },
        column: {
          flex: '1',
          marginLeft: '40px',
        },
        firstColumn: {
          flex: '1',
        },
      },
      'flex-1-3': {
        firstColumn: {
          flex: '7',
          minWidth: '240px',
        },
        column: {
          flex: '18',
          marginLeft: '20px',
          maxWidth: '619px',
        },
      },
      'mobile': {
        grid: {
          display: 'block',
        },
        column: {
          marginLeft: '0',
        },
      },
      'docs-mobile': {
        firstColumn: {
          display: 'none',
        },
      },
    }, this.props, {
      'mobile': this.context.mobile,
      'docs-mobile': this.context.mobile && this.props.flex === '1-3',
    })

    return (
      <div style={ styles.grid } className="flexbox-fix">
        { this.props.children.map((child, i) => {
          return (
            <div
              style={ Object.assign({}, styles.column, i === 0 && styles.firstColumn) }
              key={ i }
            >
              { child }
            </div>
          )
        }) }
      </div>
    )
  }
}

export default Grid
