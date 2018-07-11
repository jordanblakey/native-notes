import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import {
  MediaQuery,
  ResponsiveComponent,
  ResponsiveStyleSheet
} from 'react-native-responsive-ui'

// IMPORT COMPONENTS
// import Button from '../form/Button'

class ResponsiveTest extends ResponsiveComponent {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentDidUpdate() {
    // console.log(this.state)
    // ResponsiveComponent listens for changes in
    // window dimensions and logs them in component state.
  }

  render() {
    const { style } = this
    return (
      <View>
        <View>
          <Text>React Native Responsive UI Test</Text>
          <MediaQuery orientation="portrait">
            <Text>
              Orientation is currently portrait, so buttons are stacked.
            </Text>
          </MediaQuery>
          <MediaQuery orientation="landscape">
            <Text>
              Orientation is currently landscape, so buttons are 2 to a row.
            </Text>
          </MediaQuery>
        </View>
        <View style={style.btns}>
          <TouchableHighlight onPress={() => {}} style={style.btn}>
            <Text>Log In*</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => {}} style={style.btn}>
            <Text>Sign Up*</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

  get style() {
    return ResponsiveStyleSheet.select([
      {
        query: { orientation: 'landscape' },
        style: {
          btns: {
            flexDirection: 'row',
            flex: 1,
            padding: 5,
            paddingTop: 10,
            paddingBottom: 10
          },
          btn: {
            flex: 1,
            backgroundColor: 'lightgray',
            padding: 10,
            marginLeft: 5,
            marginRight: 5,
            alignItems: 'center'
          }
        }
      },
      {
        query: { orientation: 'portrait' },
        style: {
          btns: {
            alignSelf: 'stretch',
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10
          },
          btn: {
            flex: 1,
            backgroundColor: 'lightgray',
            padding: 10,
            marginTop: 5,
            marginBottom: 5,
            alignItems: 'center'
          }
        }
      }
    ])
  }
}

export default ResponsiveTest

////////////////////////////////////////////////////////////////////////////////
// MediaQuery props
////////////////////////////////////////////////////////////////////////////////
// minHeight | dp | Minimum height of the window.
// maxHeight | dp | Maximum height of the window.
// minWidth | dp | Minimum width of the window.
// maxWidth | dp | Maximum width of the window.
// minAspectRatio | number | Minimum aspect ration of the window (ratio of horizontal pixels to vertical pixels).
// maxAspectRatio | number | Maximum aspect ration of the window (ratio of horizontal pixels to vertical pixels).
// minPixelRatio | number | Minimum device pixel density. See PixelRatio.
// maxPixelRatio | number | Maximum device pixel density. See PixelRatio.
// orientation | portrait or landspace | Indicates whether the viewport is in landscape (the display is wider than it is tall) or portrait (the display is square or taller than it is wide) mode.
// platform | string | Platform of the device. See Platform.
// condition | boolean | Abritrary boolean value that must be true for the media query to pass.
