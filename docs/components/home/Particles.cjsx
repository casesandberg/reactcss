'use strict'

React = require('react')
ReactCSS = require('reactcss')



Node = (x, y, size, id) ->
  @id = id
  @position = [x, y]
  @size = size

Node.prototype =

  distanceTo: (otherNode) ->
    diff = [ @position[0] - otherNode.position[0], @position[1] - otherNode.position[1] ]
    return Math.abs( Math.sqrt((diff[0] * diff[0]) + (diff[1] * diff[1])) )

  isConnectedTo: (otherNode) ->
    @connected?[otherNode.id] is true or otherNode.connected?[@id] is true

  connectTo: (otherNode, context) ->
    if not @connected
      @connected = {}

    if not otherNode.connected
      otherNode.connected = {}

    @connected[otherNode.id] = true
    otherNode.connected[@id] = true

    @drawLineTo(otherNode, context)

  drawLineTo: (otherNode, context) ->
    context.beginPath()
    context.moveTo( @position[0], @position[1] )
    context.lineTo( otherNode.position[0], otherNode.position[1] )
    context.strokeStyle = '#427CC0'
    context.stroke()

  draw: (context) ->
    context.beginPath()
    context.arc(
      @position[0],
      @position[1],
      @size,
      0,
      Math.PI * 2
    )
    context.fillStyle = '#427CC0'
    context.fill()
    context.lineWidth = 2
    context.strokeStyle = '#4A90E2'
    context.stroke()



module.exports = class Particles extends ReactCSS.Component

  classes: ->
    'default':
      particles:
        Absolute: '0 0 0 0'

  componentDidMount: -> @paint()

  # componentDidUpdate: -> @paint()

  paint: ->
    canvasNode = React.findDOMNode(@refs.canvas)
    canvasContext = canvasNode.getContext('2d')

    wrapNode = React.findDOMNode(@refs.wrap)
    wrapWidth = wrapNode.clientWidth
    wrapHeight = wrapNode.clientHeight

    # Set width and height
    canvasNode.width = wrapWidth
    canvasNode.height = wrapHeight

    canvasContext.clearRect(0, 0, wrapWidth, wrapHeight);

    randomBetween = (min, max) ->
      Math.floor(Math.random() * (max - min + 1)) + min

    nodes = []
    tileSize = 75
    tilesWide = Math.ceil( wrapWidth / tileSize )
    tilesTall = Math.ceil( wrapHeight / tileSize )

    for column in [-1 .. (tilesWide + 2)]
      for row in [0 .. (tilesTall + 1)]
        nodes.push( new Node( randomBetween(0, tileSize) + (tileSize * column), randomBetween(0, tileSize) + (tileSize * row) + 10, randomBetween(2 + row, 4 + row), "#{ column }-#{ row }" ) )

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
