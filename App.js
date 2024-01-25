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
  StyleSheet,
  Button,
  Modal,
  TextInput
} from 'react-native';

const App = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [selectUser, setSelectUser] = useState(undefined);

  const getApiData = async () => {
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result)
    }
  }

  const deleteUser = async (id)=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(`${url}/${id}`,{
      method: "delete"
    });
    result = await result.json();
    if(result){
      console.warn("User Deleted");
      getApiData();
    }
  }

  useEffect(() => {
    getApiData();
  }, [])

  const updatUser = (data)=>{
    setShowModal(true)
    setSelectUser(data)
  }

  return (
    <View style={styles.container}>
       <View style={styles.dataWrapper}>
            <View style={{flex: 1}}><Text>Name</Text></View>
            <View style={{flex: 2}}><Text>Age</Text></View>
            <View style={{flex: 2}}><Text>Operation</Text></View>
            </View>
      {
        data.length ?
          data.map((item) => <View style={styles.dataWrapper}>
            <View style={{flex: 1}}><Text>{item.name}</Text></View>
            <View style={{flex: 1}}><Text>{item.age}</Text></View>
             <View style={{flex: 1}}><Button title="Delete" onPress={()=>deleteUser(item.id)}/></View>
             <View style={{flex: 1}}><Button title="Update" onPress={()=>updatUser(item)}/></View>
          </View>) : null
      }
      <Modal visible={showModal} transparent={true}>
        <UserModal setShowModal={setShowModal} selectUser={selectUser} getApiData={getApiData}/>
      </Modal>
    </View>
  )
};

const UserModal =(props)=>{
  console.warn(props.selectUser)
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(()=>{
    if(props.selectUser){
      setName(props.selectUser.name)
      setAge(props.selectUser.age.toString())
      setEmail(props.selectUser.email)
    }
  }, [props.selectUser])

  const updatUser = async ()=>{
    const url = "http://10.0.2.2:3000/users";
    const id = props.selectUser.id;
    let result = await fetch(`${url}/${id}`,{
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({name,age,email})
    })
    result = await result.json();
    if(result){
      console.warn(result);
      props.getApiData();
      props.setShowModal(false);
    }
  }
  return(
    <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput style={styles.input} value={name} onChangeText={(text)=>setName(text)}/>
            <TextInput style={styles.input} value={age} onChangeText={(text)=>setAge(text)}/>
            <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}/>

            <View style={{marginBottom: 15}}>
            <Button title='Update' onPress={updatUser}/>
            </View>
            <Button title='Close' onPress={()=>props.setShowModal(false)}/>
          </View>
        </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5, 
    padding: 5
  },
  centeredView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView:{
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.70, 
    elevation: 5, 
    // margin: 50
  },
  input:{
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    marginBottom: 15,
    fontSize: 18
  }
})

export default App;