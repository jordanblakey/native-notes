import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

// IMPORT ASSETS

const TitleBar = ({ icon }) => {
  return (
    <View style={styles.titleView}>
      <Image source={icon} style={styles.logo} />
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
    flex: 1,
    resizeMode: 'contain',
    maxHeight: '100%',
    height: 40,
    width: '100%'
  }
})

export default TitleBar
