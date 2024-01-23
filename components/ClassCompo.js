import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import Student from './components/Student';

function fruit() {
  console.warn("You Press The Fruit Function")
}
class ClassCompo extends Component{
 
  render(){
    return(
      <View>
        <Text style={{fontSize: 30, color:'red'}}>Class Base Component</Text>
        <TextInput placeholder='Enter Your Name'></TextInput>
        <Button title='Click Me' onPress={fruit}></Button>
        <Student/>
      </View>
    )
  }
}
export default ClassCompo;