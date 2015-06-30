'use strict'

React = require('react')
ReactCSS = require('reactcss')

{ Container, Grid } = require('../layout')
{ Markdown, Animate } = require('../common')

beforeCode = require('../../docs/00-home-before.md')
afterCode = require('../../docs/00-home-after.md')



module.exports = class HomeBody extends ReactCSS.Component

  classes: ->
    'default':
      sideBySide:
        marginTop: '-48px'

      callouts:
        padding: '40px 0 20px'

      code:
        paddingBottom: '20px'

      block:
        paddingBottom: '40px'

      headline:
        fontSize: '22px'
        color: 'rgba(0, 0, 0, .47)'

      copy:
        marginTop: '20px'
        fontSize: '16px'
        lineHeight: '24px'
        color: 'rgba(0, 0, 0, .37)'

  render: ->
    <div is="homeBody">
      <Container>

        <div is="sideBySide">
          <Grid>

            <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
              <div is="code">
                <Markdown condensed>{ beforeCode }</Markdown>
              </div>
            </Animate>

            <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
              <div is="code">
                <Markdown condensed>{ afterCode }</Markdown>
              </div>
            </Animate>

          </Grid>
        </div>

        <div is="callouts">
          <Grid>
            <div is="block">
              <div is="headline">Class-based Data</div>
              <div is="copy">Use a farmiliar class-based data structure that is similar to traditional css and can be applied conditionally.</div>
            </div>

            <div is="block">
              <div is="headline">Styles In One Place</div>
              <div is="copy">Keep all of the styles together. This helps separate the style logic from the display logic and business logic.</div>
            </div>

            <div is="block">
              <div is="headline">Easy to Attach</div>
              <div is="copy">Use the "is" syntax to automatically attach inline styles to html elements and spreads to custom components.</div>
            </div>
          </Grid>
        </div>

      </Container>
    </div>
