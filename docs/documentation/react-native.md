---
id: react-native
title: React Native
---

Define styles in the render method and attach them to the JSX via inline styles:
```
class Game2048 extends React.Component {
  render() {
    const styles = reactCSS({
      'default': {
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
      },
    })

    return (
      <View style={ styles.container }>
        <Board>
          { tiles }
        </Board>
        <GameEndOverlay />
      </View>
    )
  }
}
```
