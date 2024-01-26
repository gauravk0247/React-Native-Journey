import React, { useEffect, useRef, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from './redux/action';

const Product = (props) => {
    const item = props.item
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.reducer)
    const [isAdded, isSetAdded] = useState(false);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item))
    }

    const handleRemoveToCart = (item) => {
        dispatch(removeFromCart(item.name))
    }

    useEffect(() => {
        let result = cartItems.filter((element) => {
            return element.name === item.name
        });
        if (result.length) {
            isSetAdded(true)
        } else {
            isSetAdded(false)
        }
    }, [cartItems])
    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'orange', borderBottomWidth: 2, padding: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 24 }}>{item.name}</Text>
            <Text style={{ fontSize: 24 }}>{item.price}</Text>
            <Text style={{ fontSize: 24 }}>{item.color}</Text>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image }} />
            {
                isAdded ?
                    <Button title='Remove To Cart' onPress={() => handleRemoveToCart(item)} /> :
                    <Button title='Add To Cart' onPress={() => handleAddToCart(item)} />
            }
        </View>
    )
};

export default Product;