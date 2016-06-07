'use strict'

const loopable = (i, length) => {
  const props = {}
  const setProp = (name, value = true) => {
    props[name] = value
  }

  i === 0 && setProp('first-child')
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even')
  Math.abs(i % 2) === 1 && setProp('odd')
  setProp('nth-child', i)

  return props
}

export default loopable
