import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

// IMPORT ASSETS

const TitleBar = ({ title, icon }) => {
  return (
    <View style={styles.titleView}>
      <Image style={styles.nnIcon} source={icon} />
      {/* <Text style={styles.titleText}>{title}</Text> */}
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
  nnIcon: {
    opacity: 1,
    height: '2.2rem',
    width: '7rem',
    maxHeight: '100%',
    marginRight: 10
  },
  titleText: {
    color: '#FFF',
    fontSize: 30
  }
})

export default TitleBar
