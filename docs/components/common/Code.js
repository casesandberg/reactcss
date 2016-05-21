'use strict';

import React from 'react';
import reactCSS from 'reactcss';
import markdown from '../../helpers/markdown';

import { Raised, Tabs, Tile } from 'react-material-design';

export class Code extends React.Component {
  static contextTypes = {
    mobile: React.PropTypes.bool,
  }

  static propTypes = {
    files: React.PropTypes.array,
  }

  constructor() {
    super();
    this.state = {
      visibleCode: 0,
    };
  }

  render() {
    const styles = reactCSS({
      'default': {
        shortCodeBlock: {
          display: 'inline-block',
        },
        shortCode: {
          padding: '14px 16px',
        },
        head: {
          borderRadius: '2px 2px 0 0',
          background: '#fafafa',
        },
        files: {
          display: 'inline-block',
        },
        Files: {
          align: 'none',
          color: '#666',
        },
        center: {
          fontFamily: 'Monaco',
          fontSize: '14px',
          lineHeight: '19px',
          color: 'rgba(0,0,0,.77)',
        },
        numbers: {
          fontSize: '14px',
          lineHeight: '19px',
          display: 'inline-block',
          textAlign: 'right',
          color: 'rgba(0,0,0,.20)',
          userSelect: 'none',
        },
      },
      'condensed': {
        Tile: {
          condensed: true,
        },
        center: {
          paddingTop: '16px',
          paddingBottom: '16px',
          fontSize: '13px',
          lineHeight: '15px',
          overflowX: 'scroll',
        },
        numbers: {
          paddingTop: '16px',
          fontSize: '13px',
          lineHeight: '15px',
        },
      },
    }, {
      'condensed': this.context.mobile,
    });


    const files = this.props.file.split('======');
    let filenames = [];

    files.map((file, i) => {
      const args = markdown.getArgs(file);
      let obj = {};
      if (args.fileName) {
        if (files.length > 1) {
          obj = {
            label: args.fileName,
            onClick: (e, value) => this.setState({ visibleCode: value }),
            callbackValue: i,
          };
        } else {
          obj = {
            label: args.fileName,
          };
        }

        filenames.push(obj);
      }
      return file;
    });

    const code = markdown.getBody(files[this.state.visibleCode]);
    const colorCoded = markdown.renderCode(`\`\`\`\n${ code }\`\`\``).trim();
    const lines = colorCoded.split('\n').length;

    return (
      <Raised>

        <style>{ `
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
        ` }</style>

        { filenames.length ? (
          <div style={ styles.head }>
            <div style={ styles.files }>
              <Tabs style={ styles.Files } tabs={ filenames } />
            </div>
          </div>
        ) : null }

        <Tile style={ styles.Tile }>
          <div style={ styles.numbers }>
            { [...lines].map((line) => {
              return <div key={ line } style={ styles.line }>{ line }</div>;
            }) }

          </div>
          <div style={ styles.center }>
            <style>{ `
              .rendered pre{
                margin: 0;
              }
              .rendered p{
                margin: 0;
              }
            ` }</style>
            <div className="rendered" dangerouslySetInnerHTML={ { __html: colorCoded } } />
          </div>
        </Tile>

      </Raised>
    );
  }
}

export default Code;
