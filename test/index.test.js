import React from 'react'
import renderer from 'react-test-renderer'
import reactCSS from '../src'

describe('reactCSS', () => {
  test('should return simple css', () => {
    const Component = () => {
      const styles = reactCSS({
        'default': {
          body: {
            backgroundColor: '#fafafa',
          },
        },
      })
      return <div className="body" style={ styles.body } />
    }
    const tree = renderer.create(<Component />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should return multiple css', () => {
    const Component = ({ color }) => {
      const styles = reactCSS({
        'default': {
          title: {
            color,
          },
          card: {
            boxShadow: '0 0 2px rgba(0,0,0,.1)',
          },
        },
      })
      return (
        <div>
          <div className="title" style={ styles.title } />
          <div className="card" style={ styles.card } />
        </div>
      )
    }
    const tree = renderer.create(<Component color="red" />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should return complex css', () => {
    const Component = ({ zIndex }) => {
      const styles = reactCSS({
        'default': {
          card: {
            boxShadow: '0 0 2px rgba(0,0,0,.1)',
          },
        },
        'zIndex-2': {
          card: {
            boxShadow: '0 4px 8px rgba(0,0,0,.15)',
          },
        },
      }, { zIndex })
      return (
        <div>
          <div className="card" style={ styles.card } />
        </div>
      )
    }
    const tree = renderer.create(<Component zIndex="2" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
