expect = require('chai').expect
mixins = require('../src/transform-mixins')


describe 'Mixins', ->

  # Double check that it doesnt touch anything unless it matches
  it 'return the same object if nothing matches', ->
    before =
      card:
        position: 'absolute'

    after =
      card:
        position: 'absolute'

    expect(mixins(before)).to.eql(after)



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

    expect(mixins(before)).to.eql(after)
    expect(mixins(beforeArray)).to.eql(afterArray)



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

    expect(mixins(before)).to.eql(after)



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

    expect(mixins(before)).to.eql(after)


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

    expect(mixins(before)).to.eql(after)



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

    expect(mixins(before)).to.eql(after)



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

    expect(mixins(before)).to.eql(after)



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

    expect(mixins(before, customFunc)).to.eql(after)
