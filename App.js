/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  ScrollView
} from 'react-native';
import Header from './components/Header';
import Product from './components/Product';

const App = () => {

  const products = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price : 30000,
      image: 'https://i.pinimg.com/originals/af/cc/7d/afcc7dd829be97c8e5eeb76ec40a86ff.png'
    },
    {
      name: 'Apple iPhone',
      color: 'white',
      price : 30000,
      image: 'https://i.pinimg.com/originals/af/cc/7d/afcc7dd829be97c8e5eeb76ec40a86ff.png'
    },
    {
      name: 'Poco Mobile',
      color: 'white',
      price : 30000,
      image: 'https://i.pinimg.com/originals/af/cc/7d/afcc7dd829be97c8e5eeb76ec40a86ff.png'
    }
  ]
  return (
    <View>
      <Header/>
      <ScrollView>
      {
        products.map((item)=><Product item={item}/>)
      }
      </ScrollView> 
    </View>
  )
};

export default App;