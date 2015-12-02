'use strict';

import React from 'react';
import ReactCSS from 'reactcss';

import { Container, Grid } from '../layout';
import { Markdown, Animate } from '../common';

import beforeCode from '../../docs/00-home-before.md';
import afterCode from '../../docs/00-home-after.md';

export class HomeBody extends ReactCSS.Component {

  classes() {
    return {
      'default': {
        sideBySide: {
          marginTop: '-48px',
        },
        callouts: {
          padding: '40px 0 20px',
        },
        star: {
          position: 'absolute',
          right: '-23px',
          zIndex: '2',
          top: '9px',
        },
        code: {
          position: 'relative',
          paddingBottom: '20px',
        },
        block: {
          paddingBottom: '40px',
        },
        headline: {
          fontSize: '22px',
          color: 'rgba(0, 0, 0, .47)',
        },
        copy: {
          marginTop: '20px',
          fontSize: '16px',
          lineHeight: '24px',
          color: 'rgba(0, 0, 0, .37)',
        },
      },
    };
  }

  render() {
    return (
      <div is="homeBody">
        <Container>

          <div is="sideBySide">
            { this.context.mobile ?

                <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
                  <div is="star">
                    <iframe style={{ paddingTop: '5px' }} src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=small" scrolling="0" width="120px" height="30px" frameBorder="0"></iframe>
                  </div>
                  <Markdown condensed>{ afterCode +  beforeCode}</Markdown>
                </Animate>

              :

                <Grid>

                  <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
                    <div is="code">
                      <Markdown condensed>{ beforeCode }</Markdown>
                    </div>
                  </Animate>

                  <Animate inStartTransform="translateY(20px)" inEndTransform="translateY(0)" inDelay={ 400 }>
                    <div is="code">
                      <div is="star">
                        <iframe src="https://ghbtns.com/github-btn.html?user=casesandberg&repo=reactcss&type=star&count=true&size=large" scrolling="0" width="160px" height="30px" frameBorder="0"></iframe>
                      </div>
                      <Markdown condensed>{ afterCode }</Markdown>
                    </div>
                  </Animate>

                </Grid> }
          </div>

          <div is="callouts">
            <Grid>
              <div is="block">
                <div is="headline">Class-based Data</div>
                <div is="copy">Use a class-based data structure, similar to traditional modifier css, that can be applied conditionally.</div>
              </div>

              <div is="block">
                <div is="headline">Styles In One Place</div>
                <div is="copy">Keep html and components styles together. Separate the style logic from the display and business logic.</div>
              </div>

              <div is="block">
                <div is="headline">Easy to Attach</div>
                <div is="copy">Use the "is" syntax to effortlessly attach inline styles to html elements and spreads to custom components.</div>
              </div>
            </Grid>
          </div>

        </Container>
      </div>
    );
  }
}

HomeBody.contextTypes = {
  mobile: React.PropTypes.bool,
};

export default HomeBody;
