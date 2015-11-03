'use strict';

const expect = require('chai').expect;
const is = require('../src/is');

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
});
