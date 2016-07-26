'use strict';

import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import throttle from 'lodash/throttle'
import markdown from '../helpers/markdown'

import { Grid } from '../../../react-basic-layout'
import MarkdownTitle from './MarkdownTitle'
import Markdown from './Markdown'
import Code from './Code'
import Sidebar from './Sidebar'

class Docs extends React.Component {

  constructor() {
    super();
    this.state = {
      sidebarFixed: false,
      visible: false,
      files: {},
    };
    this.changeSelection = this.changeSelection.bind(this);
    this.attachSidebar = this.attachSidebar.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleScroll = throttle(this.handleScroll, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll, false);
  }

  handleScroll(e) {
    this.changeSelection();
    this.attachSidebar();
  }

  attachSidebar() {
    var sidebar = this.refs.sidebar;

    if (sidebar) {
      var sidebarTop = sidebar.getBoundingClientRect().top;

      if (sidebarTop <= 0 && this.state.sidebarFixed === false) {
        this.setState({ sidebarFixed: true });
      }

      if (sidebarTop > 0 && this.state.sidebarFixed === true) {
        this.setState({ sidebarFixed: false });
      }
    }
  }

  changeSelection() {
    const items = document.getElementsByClassName('file');
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    map(items, (item) => {
      const bottomOfItem = item.offsetTop + item.clientHeight;
      if (item.offsetTop < top && bottomOfItem > top) {
        if (this.state.visible !== item.id) {
          this.setState({ visible: item.id });
        }
      }
    });
  }

  render() {
    var markdownFiles = [];

    for (var fileName in this.props.markdown) {
      if (this.props.markdown.hasOwnProperty(fileName)) {
        var file = this.props.markdown[fileName];
        if (file) {
          var args = markdown.getArgs(file);
          var body = markdown.getBody(file);

          markdownFiles.push(
            <div key={ fileName } id={ args.id } className="markdown file">

              { args.title && !args.hideTitle && (
                <MarkdownTitle
                  isHeadline={ markdown.isSubSection(fileName) ? true : false }
                  title={ args.title }
                  link={ args.id }
                  primaryColor={ this.props.primaryColor }
                />
              ) }

              <Markdown>{ body }</Markdown>
            </div>
          );
        }
      }
    }

    return (
      <div>

        <style>{`
          #intro em{
            font-style: normal;
            position: absolute;
            margin-top: 25px;
            color: #FF9800;
          }

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
          }
          .text code{
            background: #ddd;
            padding: 1px 5px 3px;
            border-radius: 2px;
            box-shadow: inset 0 0 0 1px rgba(0,0,0,.03);
            font-size: 85%;
            vertical-align: bottom;
          }
          .markdown.file:last-child {
            min-height: 100vh;
          }
          .markdown a {
            color: #4A90E2;
          }
          .markdown a:visited {
            color: #49535B;
          }
          .markdown p{
            margin: 15px 24px 15px 0;
          }
          .markdown h1{
            font-size: 36px;
            font-weight: 200;
            color: rgba(0,0,0,.77);
            margin: 0;
            padding-top: 54px;
            padding-bottom: 5px;
            line-height: 46px;
          }
          .markdown h2{
            font-size: 26px;
            line-height: 32px;
            font-weight: 200;
            color: rgba(0,0,0,.57);
            padding-top: 20px;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          .markdown h3{
            font-weight: normal;
            font-size: 20px;
            padding-top: 20px;
            margin-top: 20px;
            color: rgba(0,0,0,.67);
          }
        `}</style>


          { this.props.sidebar !== false ?
            <Grid>
              <div ref="sidebar">
                <Sidebar files={ this.props.markdown } active={ this.state.visible } primaryColor={ this.props.primaryColor } bottom={ this.props.bottom } fixed={ this.state.sidebarFixed } />
              </div>
              <div ref="files">
                { markdownFiles }
              </div>
            </Grid>
          : <div ref="files">
            { markdownFiles }
          </div> }


      </div>
    );
  }
}

Docs.defaultProps = {
  primaryColor: '#03A9F4',
};

module.exports = Docs;
