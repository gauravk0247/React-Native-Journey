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
  Modal
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
        <UserModal setShowModal={setShowModal} selectUser={selectUser}/>
      </Modal>
    </View>
  )
};

const UserModal =(props)=>{
  console.warn(props.selectUser)
  return(
    <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={{textAlign: 'center', fontSize: 19, padding: 5}}>{props.selectUser.name}</Text>
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
    justifyContent: 'center'
  },
  modalView:{
    backgroundColor: '#fff',
    padding: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.70, 
    elevation: 5, 
    margin: 50
  }
})

export default App;