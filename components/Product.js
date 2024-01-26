import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import {useDispatch} from "react-redux";
import { addToCart } from './redux/action';

const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch();

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }
    return (
        <View style={{alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10, marginBottom: 30}}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ url: item.image }} />
            <Button title='Add To Cart' onPress={()=>handleAddToCart(item)}/>
        </View>
    )
};

export default Product;