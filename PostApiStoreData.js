import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const PostApiStoreData = () => {
  const data = {
    name: "Rudra",
    age: 30,
    email: "rudra@gmail.com"
  }
  const saveAPIData = async ()=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(data)
    })
    result = await result.json();
    console.warn(result)
  }
  useEffect(()=>{

  })
  return (
    <View>
      <Text style={{fontSize: 30}}>Post API Call</Text>
     <Button title='Press Me' onPress={saveAPIData}/>
    </View>
  )
};

export default PostApiStoreData;