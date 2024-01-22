import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Button
} from 'react-native';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [display, setDisplay] = useState("");

  const resetFormData = ()=>{
    setDisplay(false);
    setName("");
    setEmail("");
    setPass("");
  }
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Simple Form in React Native</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Enter Your name'
        value={name}
        onChangeText={(text) => setName(text)}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder='Enter Your email'
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>

      <TextInput
        style={styles.textInput}
        placeholder='Enter Your password'
        secureTextEntry={true}
        value={pass}
        onChangeText={(text) => setPass(text)}
      ></TextInput>
      <View style={styles.textBtn}>
        <Button 
        color={"green"} 
        title='Print Details' 
        onPress={()=>setDisplay(true)} />
      </View>

      <View style={styles.textBtn}>
        <Button 
        color={"red"} 
        title='Clear Details' 
        value={display}
        onPress={resetFormData}/>
      </View>
      {
        display?
        <View>
          <Text style={{fontSize: 20}}>User Name is : {name}</Text>
          <Text style={{fontSize: 20}}>User Email is : {email}</Text>
          <Text style={{fontSize: 20}}>User Pwd is : {pass}</Text>
        </View> : null
      }

    </View>

  )
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    color: 'red',
    borderRadius: 5,
    borderWidth: 2,
    margin: 10,
    borderColor: 'purple',
    textAlign: 'center'
  },
  textBtn: {
    margin: 2,
    padding: 6,
    borderRadius: 5,
    fontSize: 20,
  }
})
export default Form;