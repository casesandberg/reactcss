'use strict'

React = require('react')
css = require('reactcss')
isString = require('lodash/isString')

Tab = require('./Tab')
Link = require('./Link')
Ink = require('./Ink')


context =
  primaryColor: '#2196F3'
  accentColor: '#E91E63'
  theme: 'light'


class Tabs extends React.Component
  css: css.inline

  @propTypes =
    tabs: React.PropTypes.array
    align: React.PropTypes.oneOf(['none', 'justify', 'left', 'center'])
    children: React.PropTypes.array
    background: React.PropTypes.string

  @propExamples =
    tabs:
      type: 'array'
      like: [[
        label: 'cool'
        callback: -> console.log 'cool'
      ,
        label: 'tabs'
        callback: -> console.log 'tabs'
      ],
      ['cool', 'tabs'], ['foo', 'bar', 'longer'], ['foo', 'bar', 'way longer', 'even', 'still']
      ]
    align:
      type: 'oneOf'
      like: ['none', 'justify', 'left', 'center']
    background:
      type: 'string'
      like: ['transparent', '#4A90E2']
    color:
      type: 'string'
      like: ['#fff', '#FFEB3B']

  @defaultProps =
    selectedTab: 0
    background: 'transparent'
    color: '#fff'

  constructor: (props) ->
    super props
    @state =
      selectedTab: if @props.selectedTab < @props.tabs?.length then @props.selectedTab else 0

  classes: ->
    'default':
      tabs:
        position: 'relative'
        background: @props.background

      tabWrap:
        display: 'flex'

      tab:
        justifyContent: 'flex-start'
        minWidth: '68px'
        maxWidth: '240px'

      Tab:
        color: @props.color

      indicator:
        height: '2px'
        position: 'absolute'
        bottom: '0'
        left: '0'
        background: @props.color
        transition: 'all 200ms linear, transform 100ms 300ms linear'
        transform: 'translateY(2px)'

    'scrollable':
      tabs:
        overflowX: 'scroll'

      tabWrap:
        paddingLeft: '60px'
        justifyContent: 'flex-start'
        width: '400%'

      tab:
        width: 'auto'

    'align-justify':
      tabWrap:
        justifyContent: 'space-between'

      tab:
        width: "#{ 100 / @props.tabs?.length }%"

    'align-left':
      tabWrap:
        paddingLeft: '60px'
        justifyContent: 'flex-start'

      tab:
        width: 'auto'

    'align-center':
      tabWrap:
        justifyContent: 'center'

      tab:
        width: 'auto'


  styles: -> @css
    'scrollable': @props.width / @props.tabs?.length < 72

  handleClick: (tab) => @setState( selectedTab: tab )

  slide: ->
    containerNode = @refs.tabs
    containerLeft = containerNode.scrollLeft
    containerRight = containerNode.offsetWidth + containerNode.scrollLeft

    selectedNode = @refs["tab-#{ @state.selectedTab }"]
    selectedLeft = selectedNode.getBoundingClientRect().left - containerNode.getBoundingClientRect().left + containerNode.scrollLeft
    selectedRight = selectedLeft + selectedNode.offsetWidth

    # scroll right if tab is off screen
    if selectedRight > containerRight
      containerNode.scrollLeft += (selectedRight - containerRight)
    # scroll left if tab is off screen
    if selectedLeft < containerLeft
      containerNode.scrollLeft -= (containerLeft - selectedLeft)
    # slide the indicator
    @refs.indicator.style.left = selectedLeft
    @refs.indicator.style.width = selectedNode.offsetWidth
    @refs.indicator.style.webkitTransform = 'translateY(0)'
    @refs.indicator.style.transform = 'translateY(0)'

  componentDidMount: -> @slide()

  componentWillUpdate: (nextProps, nextState) ->
    if nextState.selectedTab >= nextProps.tabs?.length
      nextState.selectedTab = nextProps.tabs?.length - 1

  componentDidUpdate: -> @slide()

  render: ->
    <div is="tabs" ref="tabs">
      <div is="tabWrap" className="flexbox-fix">
        { for tab, i in @props.tabs
            if isString(tab)
              label = tab
              callback = null
            else
              label = tab.label
              callback = tab.onClick
              callbackValue = tab.callbackValue
              newTab = tab.newTab

            <div is="tab" ref={ "tab-#{ i }" } key={ i }>
              <Ink color={ context.theme }>
                <Link onClick={ callback } callbackValue={ callbackValue } newTab={ newTab }>
                  <Tab is="Tab" tab={ i } selected={ @state.selectedTab is i } selectable={ tab.selectable } onClick={ @handleClick }>{ label }</Tab>
                </Link>
              </Ink>
            </div>}
      </div>
      <div is="indicator" ref="indicator" />
    </div>



module.exports = Tabs
