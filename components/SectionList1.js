import React from 'react';
import {
  View,
  Text,
  SectionList
} from 'react-native';

const SectionList1 = () => {
  const users = [
    {
      id: 1,
      name: "Gaurav",
      data: ["Java", "React","SQL"]
    },
    {
      id: 2,
      name: "Krishna",
      data: ["Flutter", "Android","Dart"]
    },
    {
      id: 3,
      name: "Vaibhav",
      data: ["C", "Angular","MySql"]
    },
    {
      id: 4,
      name: "Krushna",
      data: ["CPP", "HTML","CSS"]
    }
  ]
  return (
    <View>
    <Text style={{fontSize: 30}}>Section List in React-Native</Text>
    <SectionList
    sections={users}
    renderItem={({item})=><Text style={{fontSize: 20, marginLeft: 20}}>{item}</Text>}
    renderSectionHeader={({section:{name}})=>(
      <Text style={{fontSize: 25, color: 'red'}}>{name}</Text>
  )}
    />
    </View>
  );
};
export default SectionList1;