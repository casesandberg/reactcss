/* global describe, it */

import { expect } from './helpers';
import flattenNames from '../src/flattenNames';

describe('Combine', () => {
  it('should return basic strings', () => {
    const before = ['foo', 'bar', 'baz'];
    const after = ['foo', 'bar', 'baz'];

    expect(flattenNames(before)).to.eql(after);
  });

  it('should flatten arrays', () => {
    const before = [['foo', 'bar'], [[['baz']]]];
    const after = ['foo', 'bar', 'baz'];

    expect(flattenNames(before)).to.eql(after);
  });

  it('should return key and key-true when value is true', () => {
    const before = [{ foo: true }];
    const after = ['foo', 'foo-true'];

    expect(flattenNames(before)).to.eql(after);
  });

  it('should return key-false when value is false', () => {
    const before = [{ foo: false }];
    const after = ['foo-false'];

    expect(flattenNames(before)).to.eql(after);
  });

  it('should return key-value when value is a string', () => {
    const before = [{ foo: 'bar' }];
    const after = ['foo-bar'];

    expect(flattenNames(before)).to.eql(after);
  });

  it('should return key-value when value is a number', () => {
    const before = [{ foo: 2 }];
    const after = ['foo-2'];

    expect(flattenNames(before)).to.eql(after);
  });
});
