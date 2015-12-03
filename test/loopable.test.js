'use strict';

import { React, TestUtils, expect } from './helpers';
import loopable from '../src/loopable';

describe('Loopable', () => {

  it('should return first if first', () => {
    expect(loopable(0, 4)).to.eql({ first: true, child: 0, even: true });
  });

  it('should return last if last', () => {
    expect(loopable(3, 4)).to.eql({ last: true, child: 3, odd: true });
  });

  it('should return even if even', () => {
    expect(loopable(2, 4)).to.eql({ even: true, child: 2 });
  });

  it('should return odd if odd', () => {
    expect(loopable(1, 4)).to.eql({ odd: true, child: 1 });
  });

  it('should return simple css', function() {

    class SomeComponent extends React.Component {

      render() {
        return <div {...loopable(3, 4)} />;
      }
    }

    const component = TestUtils.renderIntoDocument(<SomeComponent />);

    expect(component.render().props).to.eql({ last: true, child: 3, odd: true });
  });

});
