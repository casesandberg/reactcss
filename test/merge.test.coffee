expect = require('chai').expect
merge = require('../src/merge')



describe 'Merge', ->

  it 'return the same object if it is passed one', ->
    before =
      foo: 'bar'
      baz: 'fin'

     after =
       foo: 'bar'
       baz: 'fin'

    expect(merge(before)).to.eql(after)



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

    expect(merge(before)).to.eql(after)
