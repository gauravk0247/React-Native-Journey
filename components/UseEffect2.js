import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
const UseEffect2 = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  // useEffect(()=>{
  //   console.warn("do some animation")
  // }, [count])

  // useEffect(()=>{
  //   console.warn("call some api here")
  // }, [data])

  return (
    <View>
      <Text style={{ fontSize: 25 }}>{data} useEffect as componentDidMount {count}</Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)}></Button>
      <Button title="Update Data" onPress={() => setData(data + 1)}></Button>
      <Users info={{ data, count }} />
    </View>
  );
}
const Users = (props) => {
  console.warn(props.info)

  useEffect(() => {
    console.warn("run this code when data prop is updated");
  }, [props.info.data])

  useEffect(() => {
    console.warn("run this code when count prop is updated");
  }, [props.info.count])

  return (
    <View>
      <Text style={{ fontSize: 30, color: 'orange' }}>data : {props.info.data}</Text>
      <Text style={{ fontSize: 30, color: 'orange' }}>count : {props.info.count}</Text>
    </View>
  )
}
export default UseEffect2;