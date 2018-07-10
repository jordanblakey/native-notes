import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

// IMPORT ASSETS

const TitleBar = ({ title, icon }) => {
  return (
    <View style={styles.titleView}>
      <Image style={styles.logo} source={icon} />
    </View>
  )
}

const styles = StyleSheet.create({
  titleView: {
    backgroundColor: '#C4C4C4',
    width: '100%',
    padding: 20,
    paddingTop: 46,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logo: {
    opacity: 1,
    height: '2.2rem',
    width: '7rem',
    maxHeight: '100%',
    marginRight: 10
  }
})

export default TitleBar
