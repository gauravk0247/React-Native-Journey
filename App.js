/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput
} from 'react-native';

const App = () => {
  
  const [data, setData] = useState([])

  const searchUser = async (text)=>{
    const url = `http://10.0.2.2:3000/users?q${text}`;
    let result = await fetch(url)
    result = await result.json();
    if(result){
      setData(result)
    }
  }
  return (
    <View style={{flex: 1}}>
      <TextInput 
      style={{borderColor: 'skublue', borderWidth: 1, margin: 15, fontSize: 15}} placeholder={"Search"}
      onChangeText={(text)=>searchUser(text)}
      />
       {
        data.length ?
        data.map((item)=><View style={{padding: 10,flexDirection: 'row',justifyContent: 'space-between'}}>
          <Text style={{fontSize: 20}}>{item.name}</Text>
          <Text style={{fontSize: 20}}>{item.age}</Text>
          <Text style={{fontSize: 20}}>{item.email}</Text>
        </View> ): null
       }
    </View>
  )
};

export default App;