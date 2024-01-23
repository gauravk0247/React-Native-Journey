import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button
 
} from 'react-native';
import Student from './components/Student';

class ClassState1 extends Component{
  constructor(){
    super();
    this.state ={
      name: "Gaurav"
    }
  }
  updaName(val){
    this.setState({name: val})
  }
  render(){
    return(
      <View>
        <Text style={{fontSize: 30, color: 'red'}}>{this.state.name}</Text>
        <TextInput placeholder='Enter Your Name' 
        onChangeText={(text)=>this.updaName(text)}></TextInput>
        <Button title='Click' ></Button>
        <Student name={this.state.name}/>
      </View>
    )
  }
}

export default ClassState1;