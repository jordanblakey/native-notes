import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native'

// IMPORT COMPONENTS
import Input from '../form/Input'
import Button from '../form/Button'
import Loading from '../elements/Loading'
import {
  firebase,
  firebase_auth,
  firebase_init
} from '../../utils/FirebaseInit'
import { aSleep } from '../../utils/Funcs'

// COMPONENT
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      authenticating: false,
      authStatus: ''
    }
  }

  onPressSignUp() {
    this.setState({ authenticating: true })
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(err => {
        this.setState({ authStatus: err.message })
        aSleep(3000, () => {
          this.setState({ authStatus: '' })
        })
      })
    this.setState({ authenticating: false })
  }

  onPressLogIn() {
    this.setState({ authenticating: true })
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(err => {
        this.setState({ authStatus: err.message })
        aSleep(3000, () => {
          this.setState({ authStatus: '' })
        })
      })
    this.setState({ authenticating: false })
  }

  onPressLogOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ authStatus: 'Logged out successfully.' })
        aSleep(3000, () => {
          this.setState({ authStatus: '' })
        })
      })
      .catch(() => {
        this.setState({ authStatus: err.message })
      })
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user, err) => {
      if (user) {
        this.setState({ authStatus: 'Logged in as ' + user.email })
      }
    })
  }

  renderCurrentState() {
    if (this.state.authenticating) {
      return <Loading />
    }

    return (
      <View style={styles.container}>
        <Input
          label="Email"
          onChangeText={email => this.setState({ email })}
          placeholder="Enter your email"
          value={this.state.email}
        />
        <Input
          label="Password"
          onChangeText={password => this.setState({ password })}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={this.state.password}
        />
        <Button onPress={() => this.onPressSignUp()}>Sign Up</Button>
        <Button onPress={() => this.onPressLogIn()}>Log In</Button>
        <Button onPress={() => this.onPressLogOut()}>Log Out</Button>
        <Text style={styles.authState}>{this.state.authStatus}</Text>
      </View>
    )
  }

  render() {
    return <View style={styles.container}>{this.renderCurrentState()}</View>
  }
}

// STYLES
styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  authState: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    color: '#999',
    marginTop: 20
  }
})
