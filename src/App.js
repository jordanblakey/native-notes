import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
// console.disableYellowBox = true
console.ignoredYellowBox = ['Setting a timer']

// IMPORT ASSETS
import logo from './assets/img/logo-scorched.png'

// IMPORT COMPONENTS
import TitleBar from './components/elements/TitleBar'
import Login from './components/blocks/Login'
import ToDo from './components/blocks/ToDo'
import ResponsiveTest from './components/blocks/ResponsiveTest'
import Typography from './components/blocks/Typography'

// START APP COMPONENT
export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView>
        <Animatable.View
          animation="fadeIn"
          duration={400}
          style={styles.appContainer}
        >
          <TitleBar icon={logo} />
          <View style={styles.pageBody}>
            <ResponsiveTest />
            <ToDo />
            <Login />
            <Typography />
          </View>
        </Animatable.View>
      </ScrollView>
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
