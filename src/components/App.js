import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ListView,
  Image
} from 'react-native'

// IMPORT ASSETS
import nn_icon from '../assets/img/icon.png'

// IMPORT COMPONENTS
import TitleBar from './elements/TitleBar'
import Login from './blocks/Login'
import ToDo from './blocks/ToDo'

// START APP COMPONENT
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <TitleBar icon={nn_icon} title={'Native Notes'} />
        <View style={styles.pageBody}>
          <ToDo />
          <Login />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center'
  },
  pageBody: {
    width: '100%',
    flex: 1,
    padding: 20
  }
})
