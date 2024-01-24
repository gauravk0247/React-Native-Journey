import React from 'react';
import {
    TouchableHighlight,
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';

const ButtonDesign = () => {
    return (
        <View style={styles.main}>
            <TouchableHighlight>
                <Text style={styles.button}>Button</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.success]}>Success</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.primary]}>Primary</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.warning]}>Warning</Text>
            </TouchableHighlight>
            <TouchableHighlight>
                <Text style={[styles.button, styles.danger]}>Danger</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    button: {
        backgroundColor: '#bbb',
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        shadowColor: 'black',
        elevation: 10,
        shadowOpacity: 0.1
    },
    success: {
        backgroundColor: 'green',
    },
    primary: {
        backgroundColor: 'blue'
    },
    warning: {
        backgroundColor: 'yellow'
    },
    danger: {
        backgroundColor: 'red'
    }
})
export default ButtonDesign;