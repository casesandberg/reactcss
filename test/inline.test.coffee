expect = require('chai').expect
inline = require('../src/inline')



describe 'React Inline', ->

  it 'return a css object from a set of true class names', ->

    @classes = ->
      'base':
        card:
          position: 'absolute'

    before =
      foo: false
      'base': true

    after =
      card:
        position: 'absolute'

    expect(inline.call(@, before)).to.eql(after)



  it 'return a css object from a bunch of class names', ->

    @classes = ->
      'base':
        card:
          position: 'absolute'

      'outlined':
        card:
          border: '2px solid #aeee00'

      'disabled':
        card:
          display: 'none'

    before =
      'base': true
      'outlined': true
      'disabled': false

    after =
      card:
        position: 'absolute'
        border: '2px solid #aeee00'

    expect(inline.call(@, before)).to.eql(after)



  it 'include the `default` class', ->

    @classes = ->
      'default':
        card:
          position: 'absolute'

    after =
      card:
        position: 'absolute'

    expect(inline.call(@)).to.eql(after)



  it 'include the `public` class at the end', ->

    @classes = ->
      'public':
        card:
          opacity: '0'

      'visible':
        card:
          opacity: '1'

    before =
      'visible': true

    after =
      card:
        opacity: '0'

    expect(inline.call(@, before)).to.eql(after)



  it 'include any true props that match class names', ->
    @props =
      isSelected: true
      dark: true

    @classes = ->
      'default':
        card:
          position: 'absolute'

      'isSelected':
        card:
          color: '#aeee00'
          border: '2px solid #aeee00'

      'dark-true':
        card:
          color: '#333'

    after =
      card:
        position: 'absolute'
        color: '#333'
        border: '2px solid #aeee00'

    expect(inline.call(@, before)).to.eql(after)



  it 'check if props and values match a class', ->
    @props =
      isSelected: false
      zDepth: 2

    @classes = ->
      'default':
        card:
          position: 'absolute'

      'isSelected-false':
        card:
          background: 'grey'

      'zDepth-2':
        card:
          border: '2px solid #333'

    after =
      card:
        position: 'absolute'
        background: 'grey'
        border: '2px solid #333'

    expect(inline.call(@, before)).to.eql(after)
