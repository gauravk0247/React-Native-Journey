import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

const Grid1 = () => {
  const users=[
    {
      id: 1,
      name: "Gaurav"
    },
    {
      id: 2,
      name: "Krishna"
    },
    {
      id: 3,
      name: "Darshan"
    },
    {
      id: 4,
      name: "Krushna"
    },
    {
      id: 5,
      name: "Vaibhav"
    },
    {
      id: 6,
      name: "Devesh"
    },
    {
      id: 7,
      name: "Ajinkya"
    },
    {
      id: 8,
      name: "Ram"
    },
    {
      id: 9,
      name: "Sita"
    },
    {
      id: 10,
      name: "Rahul"
    },
    {
      id: 11,
      name: "Ritik"
    },
    {
      id: 11,
      name: "Ritesh"
    },
    {
      id: 10,
      name: "Rahul"
    },
    {
      id: 11,
      name: "Ritik"
    },
    {
      id: 11,
      name: "Ritesh"
    },
    {
      id: 10,
      name: "Rahul"
    },
    {
      id: 11,
      name: "Ritik"
    },
    {
      id: 11,
      name: "Ritesh"
    },
  ]
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Grid With Dynamic Data</Text>
        <ScrollView>
      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
      </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    borderRadius: 5,
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default Grid1;