import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
} from 'react-native';

const ApiCall = () => {
  const [data, setData] = useState(undefined);
  const getAPIDATA = async ()=>{
    // API
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }

  useEffect(()=>{
    getAPIDATA();
  }, [])
  return (
    <View>
      <Text style={{fontSize: 30}}>API Call</Text>
      {
        data ? <View>
          <Text style={{fontSize: 30}}>{data.id}</Text>
          <Text style={{fontSize: 30}}>{data.userId}</Text>
          <Text style={{fontSize: 30}}>{data.title}</Text>
          <Text style={{fontSize: 30}}>{data.body}</Text>
        </View> : null
      }
    </View>
  )
};

export default ApiCall;