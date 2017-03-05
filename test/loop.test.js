import React from 'react'
import loopable from '../src/loop'

describe('Loopable', () => {
  test('should return first-child if first', () => {
    expect(loopable(0, 4)).toEqual({ 'first-child': true, 'nth-child': 0, 'even': true })
  })

  test('should return last-child if last', () => {
    expect(loopable(3, 4)).toEqual({ 'last-child': true, 'nth-child': 3, 'odd': true })
  })

  test('should return even if even', () => {
    expect(loopable(2, 4)).toEqual({ 'even': true, 'nth-child': 2 })
  })

  test('should return odd if odd', () => {
    expect(loopable(1, 4)).toEqual({ 'odd': true, 'nth-child': 1 })
  })

  test('should return simple css', () => {
    const Component = () => <div className="body" />
    const rendered = <Component { ...loopable(3, 4) } />
    expect(rendered.props).toEqual({ 'last-child': true, 'nth-child': 3, 'odd': true })
  })
})
