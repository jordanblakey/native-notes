import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { iOSUIKit as iUIK, iOSColors as iOSC } from 'react-native-typography'

export default class Typography extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={iUIK.largeTitleEmphasized}>largeTitleEmphasized</Text>
        <Text style={iUIK.title3Emphasized}>title3Emphasized</Text>
        <Text style={iUIK.title3}>title3</Text>
        <Text style={iUIK.bodyEmphasized}>bodyEmphasized</Text>
        <Text style={iUIK.body}>body</Text>
        <Text style={iUIK.subheadEmphasized}>subheadEmphasized</Text>
        <Text style={iUIK.subhead}>subhead</Text>
        <Text style={iUIK.subheadShort}>subheadShort</Text>
        <Text style={iUIK.callout}>callout</Text>
        <Text style={iUIK.footnoteEmphasized}>footnoteEmphasized</Text>
        <Text style={iUIK.footnote}>footnote</Text>
        <Text style={iUIK.caption2Emphasized}>caption2Emphasized</Text>
        <Text style={iUIK.caption2}>caption2</Text>

        <View style={styles.swatchContainer}>
          <View style={[styles.swatch, { backgroundColor: iOSC.red }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.orange }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.yellow }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.green }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.tealBlue }]} />
        </View>
        <View style={styles.swatchContainer}>
          <View style={[styles.swatch, { backgroundColor: iOSC.tealBlue }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.blue }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.purple }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.pink }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.white }]} />
        </View>
        <View style={styles.swatchContainer}>
          <View style={[styles.swatch, { backgroundColor: iOSC.customGray }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.lightGray }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.lightGray2 }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.gray }]} />
          <View style={[styles.swatch, { backgroundColor: iOSC.black }]} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  swatchContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between'
  },
  swatch: {
    width: 50,
    height: 50,
    marginBottom: 20,
    borderRadius: 5
  }
})
