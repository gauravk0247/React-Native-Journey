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
      image: 'https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg'
    },
    {
      name: 'Apple iPhone',
      color: 'white',
      price : 30000,
      image: 'https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg'
    },
    {
      name: 'Poco Mobile',
      color: 'white',
      price : 30000,
      image: 'https://www.shutterstock.com/image-vector/3d-high-quality-vector-mobile-260nw-2121419597.jpg'
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