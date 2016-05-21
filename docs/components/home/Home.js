'use strict';

import React from 'react';

import { Shell } from '../layout';
import HomeBody from './HomeBody';
import HomeFeature from './HomeFeature';

export const Home = () => {
  return <Shell feature={ HomeFeature } body={ HomeBody } nav="about" />;
};

export default Home;
