import React, { useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

const RefFocus = () => {
  const input = useRef();

  const updateUnput= ()=>{
    input.current.focus();
    input.current.setNativeProps({
      fontSize : 24,
      color: 'red'
    })
  }
  return (
    <View style={styles.container}>
    <TextInput ref={input} style={styles.input} placeholder='Enter Name'/>
    <TextInput style={styles.input} placeholder='Enter Password'/>
    <Button title='Update Input' onPress={updateUnput}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container :{
    flex: 1,
    padding: 16
  },
  input:{
    borderColor: 'skyblue',
    borderWidth: 2,
    margin: 10
  }
})

export default RefFocus;