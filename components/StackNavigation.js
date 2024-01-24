import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
       screenOptions={{
            headerStyle: {
              backgroundColor: 'blue',
            },
            headerTintColor: 'orange',
            headerTitleStyle: {
              fontSize: 25
            }
          }}>

        <stack.Screen name='Login' component={Login}
          Options={{
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'white',
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

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Home Screen</Text></View>
  )
}
const Login = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 30 }}>LogIn Screen</Text>
      <Button title='Go To Home Page' onPress={() => props.navigation.navigate("Home")} />
    </View>
  )
}

export default StackNavigation;