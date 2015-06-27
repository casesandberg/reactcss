'use strict'

React = require('react')
ReactCSS = require('reactcss')

Container = require('../layout/Container')
Grid = require('../layout/Grid')
Code = require('../common/Code')
Markdown = require('../common/Markdown')
Animate = require('../common/Animate')



module.exports = class HomeBody extends ReactCSS.Component

  classes: ->
    'default':
      sideBySide:
        marginTop: '-48px'

      callouts:
        padding: '60px 0'

      headline:
        fontSize: '22px'
        color: 'rgba(0, 0, 0, .47)'

      copy:
        marginTop: '20px'
        fontSize: '16px'
        lineHeight: '24px'
        color: 'rgba(0, 0, 0, .37)'

  render: ->

    afterCode = """
                ``` fileName:After/Button.jsx
                var ReactCSS = require('reactcss');

                class Button extends ReactCSS.Component {

                  classes: function(){
                    return {
                      'default': {
                        button: {
                          background: '#4A90E2'
                        },
                        Icon: {
                          fill: '#fff'
                          name: this.props.icon
                        }
                      },
                      'disabled-true': {
                        button: {
                          background: '#bbb'
                        }
                        span: {
                          color: '#999'
                        }
                        Icon: {
                          fill: '#999'
                        }
                      }
                    }
                  };

                  render: function(){
                    return (
                      <div is\="button">
                        <Icon is\="Icon" />
                        <span is\="span">
                          { this.props.label }
                        </span>
                      </div>
                    )
                  };
                };
                ```
                """

    beforeCode =  """
                  ``` fileName:Before/Button.jsx
                  var merge = require('merge');

                  class Button extends React.Component {

                    render: function(){
                      var styles = {
                        button: {
                          background: '#4A90E2'
                        },
                        Icon: {
                          fill: '#fff'
                        }
                        disabledButton: {
                          background: '#bbb'
                        },
                        disabledSpan: {
                          color: '#999'
                        },
                        disabledIcon: {
                          fill: '#999'
                        }
                      }
                      var iconProps = styles.Icon;
                      if (this.props.disabled) {
                        iconProps = merge( styles.Icon,
                          styles.disabledIcon )
                      }

                      return (
                        <div style={ merge( styles.button,
                          this.props.disabled && styles.disabledButton )}>
                          <Icon {...iconProps }
                            name={ this.props.icon } />
                          <span style={ this.props.disabled &&
                            styles.disabledSpan }>
                            { this.props.label }
                          </span>
                        </div>
                      )
                    };
                  };
                  ```
                  """

    <div is="homeBody">


      <Container>

        <div is="sideBySide">
          <Grid>

            <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
              <Markdown condensed>{ beforeCode }</Markdown>
            </Animate>

            <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
              <Markdown condensed>{ afterCode }</Markdown>
            </Animate>

          </Grid>
        </div>

        <div is="callouts">
          <Grid>
            <div>
              <div is="headline">Class-based Data</div>
              <div is="copy">Use a farmiliar class-based data structure that is similar to traditional css and can be applied conditionally.</div>
            </div>

            <div>
              <div is="headline">Styles In One Place</div>
              <div is="copy">Keep all of the styles together. This helps separate the style logic from the display logic and business logic.</div>
            </div>

            <div>
              <div is="headline">Easy to Attach</div>
              <div is="copy">Use the "is" syntax to automatically attach inline styles to html elements and spreads to custom components.</div>
            </div>
          </Grid>
        </div>

      </Container>
    </div>
