import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';

const ComponentWithFlatList = () => {
  const users = [
    {
      id: 1,
      name: "Gaurav",
      email: "gaurav@gmaul.com"
    },
    {
      id: 2,
      name: "Krishna",
      email: "krishna@gmail.com"
    },
    {
      id: 3,
      name: "Krushna",
      email: "krushna@gmail.com"
    }
  ]
  return (
    <View>
      <Text style={{fontSize: 27}}>Component in loop with flatlist</Text>
      <FlatList
      data={users}
      renderItem={({item})=> <UserDataM item={item}/>}
      />
    </View>
  );
};


const UserDataM = (props) => {
  const item = props.item;
  return(
  <View style={styles.box}>
    <Text style={styles.item}>{item.id}</Text>
    <Text style={styles.item}>{item.name}</Text>
    <Text style={styles.item}>{item.email}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 25,
    color: 'orange',
    flex: 1,
    margin: 2,
    padding: 2,
    backgroundColor: 'green',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    marginBottom: 10
  }
})

export default ComponentWithFlatList;