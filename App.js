/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
const App = ()=>{
  const [count, setCount]=useState(0);
  return (
    <View>
    <Text style={{fontSize: 30}}>useEffect as componentDidMount {count}</Text>
    <Button title="Update Count" onPress={()=>setCount(count+1)}></Button>
    </View>
  );
}
export default App;