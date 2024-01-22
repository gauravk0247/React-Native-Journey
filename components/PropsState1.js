import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

const PropsState1 = () => {
  const [name,setName] = useState("Krishna");
  // let name = "Gaurav";
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Parent Component</Text>
      <Button title='Update Props' onPress={()=>setName("Gaurav")}/>
      <User name={name} age={22}/>
    </View>
  )
}

const User=(props)=> {
  return(
  <View style={{ backgroundColor: 'red', padding: 5}}>
    <Text style={{ fontSize: 30 }}>Name: {props.name}</Text>
    <Text style={{ fontSize: 30 }}>Age: {props.age}</Text>
  </View>
  )
}
export default PropsState1;