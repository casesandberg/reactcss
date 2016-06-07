/* global describe, it */
/* eslint react/prefer-stateless-function: 0 */

import { React, TestUtils, expect } from './helpers'
import loopable from '../src/loop'

describe('Loopable', () => {
  it('should return first-child if first', () => {
    expect(loopable(0, 4)).to.eql({ 'first-child': true, 'nth-child': 0, 'even': true })
  })

  it('should return last-child if last', () => {
    expect(loopable(3, 4)).to.eql({ 'last-child': true, 'nth-child': 3, 'odd': true })
  })

  it('should return even if even', () => {
    expect(loopable(2, 4)).to.eql({ 'even': true, 'nth-child': 2 })
  })

  it('should return odd if odd', () => {
    expect(loopable(1, 4)).to.eql({ 'odd': true, 'nth-child': 1 })
  })

  it('should return simple css', () => {
    class Component extends React.Component {
      render() {
        return <div className="body" />
      }
    }
    const component = TestUtils.renderIntoDocument(<Component { ...loopable(3, 4) } />)
    expect(component.props).to.eql({ 'last-child': true, 'nth-child': 3, 'odd': true })
  })
})
