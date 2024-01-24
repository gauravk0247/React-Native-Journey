import React, { useState } from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet
} from 'react-native';

const PlatForm = () => {
  return (
    <View >
      <Text style={{fontSize: 30}}>Platform : {Platform.OS}</Text>
      {
        Platform.OS == "android"?
        <View style={{backgroundColor: 'green', height: 100, width: 100}}></View>
        :
        <View style={{backgroundColor: 'red', height: 100, width: 100}}></View>
      }
      <Text style={styles.text}>Hello</Text>
      <Text style={{fontSize: 30}}>React-Native Version : {JSON.stringify(Platform.constants.reactNativeVersion.minor)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
    color: Platform.OS= "android"? "orange":"blue",
    fontSize: 30
  }
})
export default PlatForm;