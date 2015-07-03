'use strict'

React = require('react')
ReactCSS = require('reactcss')

Node = require('../../helpers/Node')



module.exports = class Particles extends ReactCSS.Component

  classes: ->
    'default':
      particles:
        Absolute: '0 0 0 0'

  componentDidMount: -> @paint()

  paint: ->
    canvasNode = React.findDOMNode(@refs.canvas)
    canvasContext = canvasNode.getContext('2d')

    wrapNode = React.findDOMNode(@refs.wrap)
    wrapWidth = wrapNode.clientWidth
    wrapHeight = wrapNode.clientHeight

    # Set width and height 2x scaled back for retina
    canvasNode.width = wrapWidth * 2
    canvasNode.height = wrapHeight * 2
    canvasNode.style.width = wrapWidth + 'px'
    canvasNode.style.height = wrapHeight + 'px'
    canvasContext.scale(2,2)

    canvasContext.clearRect(0, 0, wrapWidth, wrapHeight);

    randomBetween = (min, max) ->
      Math.floor(Math.random() * (max - min + 1)) + min

    nodes = []
    tileSize = 75
    tilesWide = Math.ceil( wrapWidth / tileSize )
    tilesTall = Math.ceil( wrapHeight / tileSize )

    for column in [-1 .. (tilesWide + 2)]
      for row in [0 .. (tilesTall + 1)]
        nodes.push( new Node(
          randomBetween(0, tileSize) + (tileSize * column),
          randomBetween(0, tileSize) + (tileSize * row) + 10,
          randomBetween(2 + row, 4 + row),
          "#{ column }-#{ row }",
          '#427CC0',
          '#4A90E2' )
        )

    # Lets draw the lines first
    for node in nodes
      for otherNode in nodes
        if node.distanceTo(otherNode) < 110 and not node.isConnectedTo(otherNode)
          node.connectTo(otherNode, canvasContext)

    # And then come back and draw the nodes on top
    for node in nodes
      node.draw(canvasContext)

  render: ->
    <div is="particles" ref="wrap">
      <canvas ref="canvas" />
    </div>
