import React, {useEffect, useState } from 'react';
import {
  View,
  Text, Button
} from 'react-native';

const UseEffectSetInteval = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
    <Text style={{fontSize: 30}}>useEffect for UnMount Component</Text>
    <Button title='Toggle' onPress={()=>setShow(!show)}/>
    {
      show ?  <Student/> : null
    }
    </View>
  );
}

const Student = ()=>{

  let timer = setInterval(() => {
    console.warn("Timer Called");
  }, 2000)

  useEffect(()=>{
    return()=> clearInterval(timer);
  })
  return(
    <Text style={{color: 'red', fontSize: 30}}>Student</Text>
  )
}
export default UseEffectSetInteval;