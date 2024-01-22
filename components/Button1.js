import React from 'react';
import {
  Text, View, Button
} from 'react-native';

// import UseData from './components/UseData';

let name = "Gaurav";
const age = 22;

function fruit(){
  return 'Apple';
}



const Button1 = () =>{
  let data = 10;
  const myFruit = (val)=>{
    data = 20;
    console.warn(data);
  }
  return (
    // <View>
    // <Text style={{fontSize:30}}>Hello Text Component</Text>
    // <Text style={{fontSize:20}}>Hello I am 2nd Text Component</Text>
    // <Button title='Press Here'></Button>
    // <Text style={{fontSize:15}}>Hello I am 3rd Text Component</Text>
    // <Button title='Press Me to'></Button>
    // <Text>{name}</Text>
    // <Text>{fruit()}</Text>
    // <Text>{}</Text>
    // </View>

    // <View>
    //   <Text style={{fontSize: 30}}>Components</Text>
    //   <UseData/>
    //   <UserLogIn/>
    // </View>

    <View>
      <Text style={{fontSize: 20}}>{data}</Text>
      <Button title='Submit' color={'red'} onPress={myFruit}/>
      <Button title='Submit 2' color={'green'} onPress={()=>myFruit("Hello")}/>
    </View>
  )
}

// const UseData = ()=>{
//   return(
//       <View>
//         <Text style={{fontSize: 20}}>Name : Gaurav</Text>
//         <Text style={{fontSize: 20}}>Age : 22</Text>
//         <Text style={{fontSize: 20}}>Email : gaurav@gmail.com</Text>
//       </View>
//   );
// };

// const UserLogIn = ()=>{
//   return(
//     <View>
//       <Text style={{fontSize: 20}}>Name: Krishna</Text>
//       <Text style={{fontSize: 20}}>Total Emp: 500</Text>
//       <Text style={{fontSize: 20}}>Product: Software</Text>

//     </View>
//   )
// }

export default Button1;