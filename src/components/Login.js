import React from 'react'
import { View, StyleSheet } from 'react-native'

// IMPORT COMPONENTS
import Input from './form/Input'
import Button from './form/Button'

// COMPONENT
export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder="Enter your email"
          label="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          placeholder="Enter your password"
          label="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button onPress={() => console.log('pressed')}>Log In</Button>
      </View>
    )
  }
}

// STYLES
styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})
