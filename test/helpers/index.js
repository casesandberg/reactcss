
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import sinon from 'sinon';
require('testdom')('<html><body></body></html>');

export {
  React,
  ReactDOM,
  ReactDOMServer,
  TestUtils,
  expect,
  sinon,
};
