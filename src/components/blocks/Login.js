import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import firebase from '../../utils/FirebaseInit'
import 'firebase/auth'

// IMPORT COMPONENTS
import Input from '../form/Input'
import Button from '../form/Button'
import Loading from '../elements/Loading'
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

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ authStatus: 'Logged in as ' + user.email })
      }
    })
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
      .catch(err => {
        this.setState({ authStatus: err.message })
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
          secureTextEntry
          value={this.state.password}
        />
        <Button
          onPress={() => this.onPressSignUp()}
          style={styles.button}
          title="Sign Up"
        />
        <Button
          onPress={() => this.onPressLogIn()}
          style={styles.button}
          title="Log In"
        />
        <Button
          onPress={() => this.onPressLogOut()}
          style={styles.button}
          title="Log Out"
        />
        <Text style={styles.authState}>{this.state.authStatus}</Text>
      </View>
    )
  }

  render() {
    return <View style={styles.container}>{this.renderCurrentState()}</View>
  }
}

// STYLES
const styles = StyleSheet.create({
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
  },
  button: {
    width: '100%'
  }
})
