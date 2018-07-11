import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#C4C4C4',
    borderRadius: 3,
    alignItems: 'center'
  },
  text: {
    color: '#e5e5e5',
    fontWeight: '700',
    fontSize: 16
  }
})

export default Button
