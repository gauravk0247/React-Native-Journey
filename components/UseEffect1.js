import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("Hello")
  },[])

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Life Cycle with Use effect {count}</Text>
      <Button title='UpdateCount' onPress={()=>setCount(count+1)}></Button>
    </View>
  );
}
export default UseEffect1;