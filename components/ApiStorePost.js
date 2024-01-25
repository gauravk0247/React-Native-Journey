import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const ApiStorePost = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async ()=>{

    if(!name){
      setNameError(true)
    }else{
      setNameError(false)
    }

    if(!age){
      setAgeError(true)
    }else{
      setAgeError(false)
    }

    if(!email){
      setEmailError(true)
    }
    else{
      setEmailError(false)
    }

    if(!name || !age || !email){
      return false
    }
      console.warn(name)
      console.warn(age)
      console.warn(email)

      const url = "http://10.0.2.2:3000/users"
      let result = await fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({name,age,email})
      })
      result =await result.json();
      if(result){
        console.warn("Data Enteried")
      }
  }
  return (
    <View style={{flex: 2, justifyContent:'center'}}>
      <Text style={{fontSize: 30}}>Post Api with Input Field data</Text>
    <TextInput placeholder='Enter Your Name' style={styles.input} value={name} onChangeText={(text)=>setName(text)}></TextInput>
    {
      nameError ? <Text style={styles.errorText}>Please Enter Valid Name</Text> : null
    }

    <TextInput placeholder='Enter Your Age' style={styles.input} value={age} onChangeText={(text)=>setAge(text)}></TextInput>
    {
      ageError ? <Text style={styles.errorText}>Please Enter Valid Age</Text> : null
    }

    <TextInput placeholder='Enter Your Email' style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}></TextInput>
    {
      emailError ? <Text style={styles.errorText}>Please Enter Valid Email</Text> : null
    }

    {/* <Button title="Save Data" onPress={saveData}/> */}
    <TouchableHighlight>
      <Text style={styles.button} onPress={saveData} >Save Data</Text>
    </TouchableHighlight>
    </View>
  )
};

const styles = StyleSheet.create({
  input:{
    borderColor: "skyblue",
    borderWidth: 1,
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5
  }, 
  errorText:{
    color: 'red',
    textAlign: 'center'
  },
  button:{
    fontSize: 22,
    backgroundColor: 'green',
    borderColor: 'green',
    borderWidth: 2,
    textAlign: 'center',
    color: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 10
  } 
})

export default ApiStorePost;