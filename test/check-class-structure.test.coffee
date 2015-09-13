checkClassStructure = require('../src/check-class-structure')
sinon = require('sinon')


describe 'Check Class Structure', ->
  sandbox = sinon.sandbox.create()

  beforeEach ->
    sandbox.stub(console, 'log')
    sandbox.stub(console, 'error')
    sandbox.stub(console, 'warn')

  afterEach ->
    sandbox.restore()

  it 'Accept basic class structure with no warnings', (done) ->
    before =
      'default':
        element:
          foo: 'bar'

        title:
          color: '#333'

    checkClassStructure(before)
    sinon.assert.notCalled(console.warn)
    done()


  it 'Warn if class key is not given an object as a value', (done) ->
    before =
      'default': 'string'

    checkClassStructure(before)
    sinon.assert.calledOnce(console.warn)
    done()

  it 'Warn if elements arent given an object as a value', (done) ->
    before =
      'default':
        header: 'string'

    checkClassStructure(before)
    sinon.assert.calledOnce(console.warn)
    done()
