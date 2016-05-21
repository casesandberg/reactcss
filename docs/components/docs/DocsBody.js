'use strict'

import React from 'react'
import _ from 'lodash'
import reactCSS from 'reactcss'
const markdown = require('../../helpers/markdown')

const { Container, Grid } = require('../layout')
const { Markdown, Animate } = require('../common')
const { DocsSidebar } = require('./DocsSidebar')
const { DocsBodyTitle } = require('./DocsBodyTitle')

const docsFiles = require('../../docs')
const commentedFile = require('../../docs/00-commented-file.md')

export class DocsBody extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: '',
      files: {},
      sidebarFixed: false,
    }
  }

  componentDidMount() {
    const files = {}
    let file

    window.addEventListener('scroll', this.onScroll, false)

    for (file in this.refs.files.children) {
      files[file.offsetTop] = file.id
    }

    this.setState({ files })
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  onScroll() {
    this.changeSelection()
    this.attachSidebar()
  }


  attachSidebar() {
    const sidebarTop = this.refs.docsSidebar.getBoundingClientRect().top

    if (sidebarTop <= 0 && this.state.sidebarFixed === false) {
      this.setState({ sidebarFixed: true })
    }

    if (sidebarTop > 0 && this.state.sidebarFixed === true) {
      this.setState({ sidebarFixed: false })
    }
  }

  changeSelection() {
    const top = document.body.scrollTop - 150
    let mostVisible = ''
    let offset
    for (offset of this.state.files) {
      const id = this.state.files[offset]
      if (offset < top) {
        mostVisible = id
      }
    }

    if (mostVisible !== this.state.visible) {
      this.setState({ visible: mostVisible })
    }
  }


  render() {
    const styles = reactCSS({
      'default': {
        docsBody: {
          paddingBottom: '80px',
        },
        content: {
          fontSize: '17px',
          lineHeight: '24px',
          color: 'rgba(0,0,0,.47)',
        },
        animate: {
          marginTop: '-240px',
          paddingBottom: '40px',
        },
        inner: {
          padding: '16px',
        },
        file: {
          paddingBottom: '10px',
        },
      },
    })

    return (
      <div style={ styles.docsBody } className="docsBody">
        <Container>
          <Grid uneven flex="1-3">

            <Animate inDelay={ 900 } ref="docsSidebar">
              <DocsSidebar
                files={ docsFiles }
                active={ this.state.visible }
                fixed={ this.state.sidebarFixed }
              />
            </Animate>

            <div style={ styles.content }>
              <Animate
                inStartTransform="translateY(20px)"
                inEndTransform="translateY(0)"
                inDelay={ 400 }
              >
                <div style={ styles.animate }>
                  <Markdown>{ commentedFile }</Markdown>
                </div>
              </Animate>

              <div ref="files">
                { _.map(docsFiles, (file, fileName) => {
                  const args = markdown.getArgs(file)
                  const body = markdown.getBody(file)
                  return (
                    <div key={ fileName } id={ args.id }>
                      <DocsBodyTitle
                        isHeadline={ markdown.isSubSection(fileName) && true }
                        title={ args.title }
                        link={ args.id }
                      />

                      { body.trim() ? (
                        <div style={ styles.file }>
                          <Markdown>{ body }</Markdown>
                        </div>
                      ) : null }
                    </div>
                  )
                }) }
              </div>
            </div>
          </Grid>

        </Container>
      </div>
    )
  }
}

export default DocsBody
