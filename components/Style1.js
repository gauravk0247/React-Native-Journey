import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Exstyles from './State1'

const Style1 = () => {
 
  return (
    <View>
    <Text style={{fontSize: 30, color: 'red', backgroundColor: 'green'}}>Styel in React-Native</Text>
    <Text style={styles.textBox}>Styel in React-Native</Text>
    <Text style={styles.textBox}>Styel in React-Native</Text>
    <Text style={Exstyles.textBox}>Styel in React-Native</Text>
    <Text style={[styles.textBox, Exstyles.textBox]}>Styel in React-Native</Text>
    <Text style={[styles.textBox, Exstyles.textBox, {marginTop: 20}]}>Styel in React-Native</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textBox:{
    color: 'white',
    fontSize: 20,
    backgroundColor: 'purple',
    margin: 10,
    padding: 2,
    borderRadius: 4,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2
  }
})


export default Style1;