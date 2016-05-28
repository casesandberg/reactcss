'use strict'

import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'
import markdown from '../../helpers/markdown'

const { DocsSidebarItem } = require('./DocsSidebarItem')

export class DocsSidebar extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        sidebar: {
          paddingTop: '20px',
          position: 'relative',
          width: '100%',
        },
        star: {
          position: 'absolute',
          top: '-65px',
          left: '10px',
        },
      },
      'fixed': {
        sidebar: {
          top: '0',
          bottom: '0',
          position: 'fixed',
        },
        star: {
          bottom: '30px',
          top: 'auto',
        },
      },
    })

    return (
      <div style={ styles.sidebar }>

        <div style={ styles.star }>
          <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
        </div>

        { _.map(this.props.files, (file, fileName) => {
          const args = markdown.getArgs(file)
          const sectionNumber = markdown.isSubSection(fileName) ? fileName.split('-')[0] : false

          return (
            <DocsSidebarItem
              key={ fileName }
              sidebarNumber={ sectionNumber }
              href={ `#${ args.id }` }
              active={ this.props.active === args.id }
              bold={ sectionNumber && true }
              label={ args.title }
            />
          )
        }) }
      </div>
    )
  }
}

export default DocsSidebar
