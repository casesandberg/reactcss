Node = (x, y, size, id, color, background) ->
  @id = id
  @position = [x, y]
  @size = size
  @color = color
  @background = background

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
    context.strokeStyle = @color
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
    context.fillStyle = @color
    context.fill()
    context.lineWidth = 2
    context.strokeStyle = @background
    context.stroke()


module.exports = Node
