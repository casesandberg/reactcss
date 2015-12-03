'use strict';

import { expect } from './helpers';
import is from '../src/is';

describe('is', () => {

  it('removes the is if nothing is passed', () => {
    expect(is('<div is="" />')).to.eql('<div  />');
    expect(is('<div is=" " />')).to.eql('<div  />');
  });

  it('should return as inline style if lowercase name', () => {
    expect(is('<div is="foo" />')).to.eql('<div style={this.styles().foo} />');
  });

  it('should return as inline style if uppercase name', () => {
    expect(is('<div is="Foo" />')).to.eql('<div {...this.styles().Foo} />');
  });

  it('should be able to parse double and single quotes', () => {
    expect(is('<div is="foo" />')).to.eql('<div style={this.styles().foo} />');
    expect(is('<div is=\'foo\' />')).to.eql('<div style={this.styles().foo} />');
  });

  it('should be able to parse simple javascript', () => {
    expect(is('<div is={"foo"} />')).to.eql('<div style={this.styles().foo} />');
    expect(is('<div is={"foo" + "bar"} />')).to.eql('<div style={this.styles().foobar} />');
    expect(is('<div is={"foo" + (true && "bar")} />')).to.eql('<div style={this.styles().foobar} />');
  });

  it('should be able to parse javascript objects', () => {
    expect(is('<div is={{ foo: true }} />')).to.eql('<div style={this.styles().foo} />');
  });

  it('should throw an error if it cant eval javascript', () => {
    // is('<div is={"foo" true && "bar"} />');
  });

  it('should be able to parse a bunch of html', () => {
    expect(is('<div><div is="foo" /><div is="head"><h1 is="headline">Hello</h1></div></div>')).to.eql('<div><div style={this.styles().foo} /><div style={this.styles().head}><h1 style={this.styles().headline}>Hello</h1></div></div>');
  });

  it('should return a merge function if there are two classes', () => {
    expect(is('<div is="foo bar" />')).to.eql('<div style={ReactCSS.merge(this.styles().foo, this.styles().bar)} />');
  });

  it('should return a merge function if there are truthy classes in object', () => {
    expect(is('<div is={{ foo: true, bar: 2 === 2}} />')).to.eql('<div style={ReactCSS.merge(this.styles().foo, this.styles().bar)} />');
  });
});
