import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.activityView}>
      <ActivityIndicator color="#C4C4C4" size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1
  },
  activityView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Loading
