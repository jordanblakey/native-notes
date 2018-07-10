import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    width: '100%',
    backgroundColor: '#C4C4C4',
    borderRadius: 3,
    alignItems: 'center'
  },
  text: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16
  }
})

export default Button
