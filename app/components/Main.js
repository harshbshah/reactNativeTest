import React from 'react';
import {

    StyleSheet,
    Text,
    View,TouchableOpacity
} from 'react-native';

var logMessage = () =>{
    console.log("Hello");
}

var Main = React.createClass( {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={logMessage}>
                <Text>Hello from Main</Text>
                </TouchableOpacity>


            </View>
        );
    }
});
//doing things with the flex align items and playing with CSS
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
});
module.exports = Main;