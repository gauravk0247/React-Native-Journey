import React from 'react';
import {
  View,
  Text,
  Button,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './components/LogIn';
import { Home } from './components/Home';

const StackNavigation1 = createNativeStackNavigator();
const App = () => {
  const btnAction = ()=>{
    console.warn("Button Press")
  }
  return (
    <NavigationContainer>
      <stack.Navigator
       screenOptions={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'skyblue',
            headerTitleStyle: {
              fontSize: 25
            }
          }}>

        <stack.Screen name='Login' component={Login}
          options={{
            headerTitle: ()=><Button title='left' onPress={btnAction}/>,
            headerRight: ()=><Header/>,
            title: "User LogIn",
            headerStyle: {
              backgroundColor: 'orange',
            },
            headerTintColor: 'red',
            headerTitleStyle: {
              fontSize: 40
            }
          }}
        />
        <stack.Screen name='Home' component={Home} />

      </stack.Navigator>
    </NavigationContainer>
  );
}
const Header = ()=>{
  return <TextInput placeholder='search'/>
}
export default StackNavigation1;