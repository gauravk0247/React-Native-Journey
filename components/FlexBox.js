import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const FlexBox = () => {
    return (
        <View style={styles.mainBox}>
            <View style={styles.box1}>
                <View style={styles.InnerBox1}></View>
                <View style={styles.InnerBox2}></View>
                <View style={styles.InnerBox3}></View>
            </View>
            <View style={styles.box2}></View>
            <View style={styles.box3}>
                <View style={styles.InnerBoxLast}></View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainBox: {
        flex: 1
    },
    box1: {
        flex: 2,
        backgroundColor: 'red',
        flexDirection: 'row-reverse'
    },
    box2: {
        flex: 1,
        backgroundColor: 'green'
    },
    box3: {
        flex: 1,
        backgroundColor: 'blue',
        flexDirection: 'row'
    },
    InnerBox1: {
        flex: 1,
        backgroundColor: 'yellow',
        margin: 10
    },
    InnerBox2: {
        flex: 1,
        backgroundColor: 'skyblue',
        margin: 10
    },
    InnerBox3: {
        flex: 1,
        backgroundColor: 'orange',
        margin: 10
    },
    InnerBoxLast: {
        flex: 1,
        backgroundColor: 'purple',
        margin: 60
    }
})
export default FlexBox;