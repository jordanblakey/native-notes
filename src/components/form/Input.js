import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        value={value}
        underlineColorAndroid="transparent"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#CCC',
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10
  },
  label: {
    fontSize: 16,
    width: '100%',
    fontWeight: '700'
  },
  input: {
    height: 30,
    fontSize: 16,
    width: '100%',
    color: '#999'
  }
})

export default Input
