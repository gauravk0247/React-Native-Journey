/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [user, setUser] = useState('');

 const setData = async () =>{
  await AsyncStorage.setItem("rak", "Gaurav")
 }

 const getData = async () =>{
  const name = await AsyncStorage.getItem("rak");
  console.warn(name)
  setUser(name)
 }

 const removeData = async ()=>{
  await AsyncStorage.removeItem("user")
  setUser("")
 }
  return (
    <View style={{marginTop: 100, marginLeft: 30, marginRight: 30}}>
    <Text style={{fontSize: 30}}>AsyncStorage with React Native | {user}</Text>
    <Button title='Set Data' onPress={setData}/>
    <Button title='Get Data' onPress={getData}/>
    <Button title='Remove Data' onPress={removeData}/>


    <View style={styles.box}>
      <Text style={{fontSize: 20, color: "black", textAlign: 'center'}}>Box</Text>
    </View>
    </View>
  )
};

const styles = StyleSheet.create({
  box:{
    backgroundColor: 'green',
    height: 100,
    width: 100,
    padding: 10,
    margin: 20,
    borderColor: 'red',
    borderWidth: 2
  }
})

export default App;