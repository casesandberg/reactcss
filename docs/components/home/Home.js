'use strict';

import React from 'react';

import { Shell } from '../layout';
import HomeBody from './HomeBody';
import HomeFeature from './HomeFeature';

export class Home extends React.Component {
  render() {
    return <Shell feature={ HomeFeature } body={ HomeBody } nav="about" />;
  }
}

export default Home;
