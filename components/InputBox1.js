import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button
} from 'react-native';

const InputBox1 = () => {
 const [name, setName] = useState("");
  return (
    <View>
   <Text style={{fontSize: 30}}>Handle Text Input</Text>
   <Text style={{fontSize: 30}}>Your name is: {name}</Text>
   <TextInput 
   style={styles.textInput}
   placeholder='Enter Your Name'
   value={name}
   onChangeText={(text)=>setName(text)}  
  / >
    <Button title='Clear Input Value' onPress={()=>setName('')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
     color: 'red', 
     borderWidth: 2, 
     borderColor: 'green',
      margin: 4, 
      borderRadius: 5
  }
})
export default InputBox1;