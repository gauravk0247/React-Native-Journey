import React, {useState } from 'react';
import {
  View,
  Text, Button
} from 'react-native';

const ShowHideToggle = () => {
  const [show, setShow]= useState(false);

  return (
    <View>
      <Text style={{fontSize: 30}}>Show/Hide Component</Text>
      {
        show ? <User/> : null
      }
      <Button title='Toggle Component' onPress={()=>setShow(!show)}/>
    </View>
  );
}

const User = ()=>{
  return(
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User Component</Text>
    </View>
  )
}
export default ShowHideToggle;