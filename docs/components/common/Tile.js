'use strict'

import React from 'react'
import reactCSS from 'reactcss'

export const Tile = (props) => {
  const styles = reactCSS({
    'default': {
      primary: {
        display: 'flex',
        width: '100%',
      },
      sidebar: {
        minWidth: '56px',
        maxWidth: '56px',
        flexBasis: '56',
      },
      content: {
        background: 'none',
        flex: '1',
        maxWidth: '95%',
      },
    },
    'condensed': {
      tile: {
        paddingBottom: '0',
        paddingTop: '0',
      },
      sidebar: {
        minWidth: '28px',
        maxWidth: '28px',
        flexBasis: '28',
      },
    },
  }, props)

  const [sidebar, ...content] = props.children

  return (
    <div style={ styles.primary } className="flexbox-fix">
      <div style={ styles.sidebar }>
        { sidebar }
      </div>
      <div style={ styles.content }>
        { content }
      </div>
    </div>
  )
}

export default Tile
