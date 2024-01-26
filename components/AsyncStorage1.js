import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorage1 = () => {

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
    </View>
  )
};

export default AsyncStorage1;