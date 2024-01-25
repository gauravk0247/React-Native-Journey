import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name='Login' component={Login} /> 
        <Tab.Screen name='Signup' component={Signup} />

      </Tab.Navigator>
    </NavigationContainer>
    
  )
};

const Login = () => {
  return <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
      <Text style={{fontSize: 30}}>LogIn</Text>
    </View>  
}

const Signup = () => {
  return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>SignUp</Text>
    </View>
}
export default BottomTab1;