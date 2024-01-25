import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import style from './style';

const JsonServerAPI = () => {
const [data, setData] = useState([]);
  const getApiData = async ()=>{
    const url = "http://10.0.2.2:3000/users";
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  }

  useEffect(()=>{
    getApiData();
  }, [])
  return (
    <View>
      <Text style={{fontSize: 30}}>Call json server</Text>
      <ScrollView>
      {
        data.length ? 
        data.map((item)=><View style={{borderColor: 'black', borderWidth: 2, margin: 5, padding: 3}}>
          <Text style={styles.design}>{item.id}</Text>
          <Text style={styles.design}>{item.name}</Text>
          <Text style={styles.design}>{item.age}</Text>
          <Text style={styles.design}>{item.email}</Text>
          </View>)
          : null
      }
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  design: {
    backgroundColor: 'red',
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
})

export default JsonServerAPI;