/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

const App = () => {
  const users=[
    {
      id: 1,
      name: "Gaurav"
    },
    {
      id:2,
      name: "Krishna"
    },
    {
      id:3,
      name: "Darshan"
    },
    {
      id:4,
      name: "Ram"
    },
    {
      id:5,
      name: "Sita"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 30}}>List With Flat List Component</Text>
      <FlatList 
      data={users}
      renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
      keyExtractor={item=>item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    color: 'white',
    padding: 5,
    fontSize: 25,
     backgroundColor: 'purple',
     borderColor: 'black',
     borderWidth: 2,
     margin: 10,
     textAlign: 'center',
     borderRadius: 5
  }
})
export default App;