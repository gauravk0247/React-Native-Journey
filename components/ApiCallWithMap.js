import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';

const ApiCallWithMap = () => {
  const [data, setData] = useState([]);

  const getAPIDATA = async ()=>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }
  useEffect(()=>{
    getAPIDATA();
  }, [])
  return (
    <View>
      <Text style={{fontSize: 30}}>List With API Call</Text>
      <ScrollView>
      {
        data.length ? 
        data.map((item)=><View style={{margin: 10, padding: 10, borderBlockColor: "red", borderWidth: 2, backgroundColor: "purple"}}>
            <Text style={{fontSize: 20, color: 'white'}}> ID : {item.id}</Text>
            <Text style={{fontSize: 20, color: 'white'}}> TITLE : {item.title}</Text>
            <Text style={{fontSize: 20, color: 'white'}}> BODY : {item.body}</Text>
          </View>
        ) : null
      }
      </ScrollView>
    </View>
  )
};

export default ApiCallWithMap;