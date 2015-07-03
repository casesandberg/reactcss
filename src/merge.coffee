'use strict'

merge = require('merge')
_ = require('lodash')



module.exports = (thingsToBeMerged) ->

  # If its an object, lets just return it
  if _.isObject(thingsToBeMerged) and not _.isArray(thingsToBeMerged)
    return thingsToBeMerged

  # If the array only has one object in it, return it
  if thingsToBeMerged.length is 1
    return thingsToBeMerged[0]

  # Else, lets just use the merge.js function:
  return merge.recursive.apply @, thingsToBeMerged
