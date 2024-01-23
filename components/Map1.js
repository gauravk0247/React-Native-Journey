import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

const Map1 = () => {
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
    },
    {
      id:10,
      name: "Namo"
    },
    {
      id:11,
      name: "Arush"
    },
    {
      id:12,
      name: "Ayush"
    },
    {
      id:13,
      name: "Krushna"
    },
    {
      id:14,
      name: "Vaibhav"
    },
    {
      id:15,
      name: "Devesh"
    },
    {
      id:20,
      name: "Pradhan"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 30}}>List With Map Function</Text>
      <ScrollView style={{marginBottom: 60}}>    
        {
      users.map((item)=><Text style={styles.item}>{item.name}</Text>)
     }
    </ScrollView>
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
export default Map1;