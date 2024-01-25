import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';

const APIWithFlatList = () => {
  const [data, setData] = useState([]);

  const getAPIData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    let result = await fetch(url);
    result = await result.json();
    setData(result)
  }

  useEffect(() => {
    getAPIData();
  }, [])
  return (
    <View>
      <Text style={{ fontSize: 30 }}>FlatList With API Call</Text>
      {
        data.length ?
          <FlatList
            data={data}
            renderItem={({item}) => <View style={{margin:5, padding:10, borderColor:'red', borderWidth: 2, backgroundColor: "purple"}}>
              <Text style={{fontSize: 20, color: 'white'}}>ID: {item.id}</Text>
              <Text style={{fontSize: 18, color:'white'}}>Title: {item.title}</Text>
              <Text style={{fontSize: 18, color:'white'}}>Body: {item.body}</Text>
            </View>}
          />
          : null
      }
    </View>
  )
};

export default APIWithFlatList;