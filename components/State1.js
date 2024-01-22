import React, { useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

// import UseData from './components/UseData';
// import Button1 from './components/Button1';
const State1 = () =>{
    const [name, setName] = useState("Gaurav");
    let data = "Sam"
  
    function testName(){
      setName("Ram");
      data = "Peter";
    }
    return (
      <View>
     <Text style={{fontSize: 30}}>{name}</Text>
     <Text style={{fontSize: 30}}>{data}</Text>
     <Button title='Update Name' onPress={testName}></Button>
      </View>
    )
  }
  export default State1;