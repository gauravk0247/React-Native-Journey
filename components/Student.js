import React,{Component} from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

class Student extends Component{
    fruit = ()=>{
        console.warn("Apple")
    }
  render(){
    return(
      <View>
        <Text style={{fontSize: 30, color:'green'}}>Student Name : {this.props.name}</Text>
      </View>
    )
  }
}

export default Student;