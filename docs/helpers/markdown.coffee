
module.exports = markdown =

  getArgs: (code) ->
    args = {}
    if code.indexOf('---') > -1
      match = /---([\s\S]*?)---\n([\s\S]*)/.exec(code)

      for arg in match[1].trim().split('\n')
        regex = /(.+?): (.+)/.exec(arg)
        args[regex[1]] = regex[2]

      code = match[2]
    return args

  getBody: (code) ->
    if code.indexOf('---') > -1
      match = /---([\s\S]*?)---\n([\s\S]*)/.exec(code)
      return match[2]
    else
      return code

  isCode: (text) ->
    array = []
    reg = new RegExp(/(```.*\n([\s\S]*?)```)/g)
    while match = reg.exec(text)
      array.push( match )
    return array

  isCodeBlock: (string) ->
    return true if string.indexOf('|Code:') > -1

  codeNumber: (string) ->
    /\|Code:(.+?)\|/.exec(string)[1]
