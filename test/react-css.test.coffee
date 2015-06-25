css = require('../lib/react-css')
expect = require('chai').expect



describe 'css', ->
  it 'marge and expand css', ->
    before = [
      page:
        position: 'relative'
        background: '#fafafa'

      header:
        font: '24px Roboto 600 rgba(0,0,0,.87)'
    ,
      page:
        background: '#333'

      header:
        color: 'rgba(255,255,255,.87)'

      card:
        borderRadius: '2'
    ]

    after =
      page:
        position: 'relative'
        background: '#333'

      header:
        font: '24px Roboto 600 rgba(0,0,0,.87)'
        color: 'rgba(255,255,255,.87)'

      card:
        msBorderRadius: '2'
        MozBorderRadius: '2'
        OBorderRadius: '2'
        WebkitBorderRadius: '2'
        borderRadius: '2'

    expect(css(before)).to.eql(after)



  it 'handle conditional styles', ->

    before = [
      page:
        position: 'relative'
        background: '#fafafa'

      header:
        font: '24px Roboto 600 rgba(0,0,0,.87)'
    , if 2 is 3
      page:
        background: '#333'

      header:
        color: 'rgba(255,255,255,.87)'

      card:
        BorderRadius: '2'
    ,
      element:
        padding: '10px'
    ]

    after =
      page:
        position: 'relative'
        background: '#fafafa'

      header:
        font: '24px Roboto 600 rgba(0,0,0,.87)'

      element:
        padding: '10px'

    expect(css(before)).to.eql(after)



describe 'Resolve', ->

  it 'resolve a basic list of arguments', ->
    before =
      margin: css.resolve '14px',
                          '20px' if true
     after =
       margin: '20px'

    expect(before).to.eql(after)



  it 'resolve a long list of arguments', ->
    before =
      margin: css.resolve '14px',
                          '20px' if true,
                          '70px' if 2 is 2,
                          '20px' if true,
                          '70px' if 2 is 2,
                          '1px' if true,
                          '70px' if false
     after =
       margin: '1px'

    expect(before).to.eql(after)



  it 'return the default value if everything else is false', ->
    before =
      margin: css.resolve '14px',
                          '20px' if false
     after =
       margin: '14px'

    expect(before).to.eql(after)



describe 'Merge', ->

  it 'return the same object if it is passed one', ->
    before =
      foo: 'bar'
      baz: 'fin'

     after =
       foo: 'bar'
       baz: 'fin'

    expect(css.merge(before)).to.eql(after)



  it 'merge objects passed through array', ->

    before = [
      card:
        background: '#fff'
        margin: '0 6px'
    ,
      card:
        margin: '0'
        boxShadow: '0 1px 4px rgba(0,0,0,.24)'
    ]

    after =
      card:
        background: '#fff'
        margin: '0'
        boxShadow: '0 1px 4px rgba(0,0,0,.24)'

    expect(css.merge(before)).to.eql(after)



describe 'Mixins', ->

  # Double check that it doesnt touch anything unless it matches
  it 'return the same object if nothing matches', ->
    before =
      card:
        position: 'absolute'

    after =
      card:
        position: 'absolute'

    expect(css.mixins(before)).to.eql(after)



  # In the case of a style being passed down to a child component
  it 'skip selectors whos values are strings or arrays', ->
    before =
      button: 'bigger'

    after =
      button: 'bigger'

    beforeArray =
      button: ['bigger']

    afterArray =
      button: ['bigger']

    expect(css.mixins(before)).to.eql(after)
    expect(css.mixins(beforeArray)).to.eql(afterArray)



  it 'expand basic custom props where the output is just values', ->

    before =
      card:
        borderRadius: '2'

    after =
      card:
        msBorderRadius: '2'
        MozBorderRadius: '2'
        OBorderRadius: '2'
        WebkitBorderRadius: '2'
        borderRadius: '2'

    expect(css.mixins(before)).to.eql(after)



  it 'expand custom props where the output is a complex eval', ->

    before =
      card:
        Absolute: '0 0 0 0'

    after =
      card:
        position: 'absolute'
        top: '0'
        right: '0'
        bottom: '0'
        left: '0'

    expect(css.mixins(before)).to.eql(after)


  # this was a fix for checking that it didnt replace other stuff. Write a better
  # test for the future
  it 'expand custom props where the output is a complex eval v2', ->

    before =
      card:
        Absolute: '0 0 0 0'
        background: '#fff'

    after =
      card:
        position: 'absolute'
        top: '0'
        right: '0'
        bottom: '0'
        left: '0'
        background: '#fff'

    expect(css.mixins(before)).to.eql(after)



  it 'extend mixin copies styles from another element', ->

    before =
      title:
        fontFamily: 'Roboto'
        fontSize: '16px'
        fontWeight: 'bold'
        color: 'rgba(0,0,0,.87)'

      subtitle:
        Extend: 'title'
        fontSize: '14px'
        color: 'rgba(0,0,0,.57)'

    after =
      title:
        fontFamily: 'Roboto'
        fontSize: '16px'
        fontWeight: 'bold'
        color: 'rgba(0,0,0,.87)'

      subtitle:
        fontFamily: 'Roboto'
        fontWeight: 'bold'
        fontSize: '14px'
        color: 'rgba(0,0,0,.57)'

    expect(css.mixins(before)).to.eql(after)



  it 'be able to step through and epand a compex array properly', ->
    before =
      body:
        sidebar:
          card:
            Absolute: '0 0 0 0'

    after =
      body:
        sidebar:
          card:
            position: 'absolute'
            top: '0'
            right: '0'
            bottom: '0'
            left: '0'

    expect(css.mixins(before)).to.eql(after)



  it 'be able to pass through functions to transform', ->

    customFunc =
      AddTogetherMargin: (value) ->

        total = 0

        for number in value.split(' ')
          total += parseInt(number)

        return { margin: total }

    before =
      body:
        AddTogetherMargin: '2 2'

    after =
      body:
        margin: 4

    expect(css.mixins(before, customFunc)).to.eql(after)



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

    expect(css.inline.call(@, before)).to.eql(after)



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

    expect(css.inline.call(@, before)).to.eql(after)



  it 'include the `default` class', ->

    @classes = ->
      'default':
        card:
          position: 'absolute'

    after =
      card:
        position: 'absolute'

    expect(css.inline.call(@)).to.eql(after)



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

    expect(css.inline.call(@, before)).to.eql(after)



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

    expect(css.inline.call(@, before)).to.eql(after)



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

    expect(css.inline.call(@, before)).to.eql(after)
