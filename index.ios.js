/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


import Main from './app/components/Main';

var reactNativeTest = React.createClass( {
  render() {
    return (
      <View style={styles.container}>

          <Main />


      </View>
    );
  }
});
//doing things with the flex align items and playing with CSS
const styles = StyleSheet.create({
  container: {
      flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
// first:{
//     flex:1,
//     alignSelf: 'stretch',
//     backgroundColor:'red'
// },
// second:{
//     flex:9,
//     alignSelf: 'stretch',
//     flexDirection:'column',
//     alignItems:'flex-start',
//     justifyContent:'space-around',
//     backgroundColor:'blue'
// },
// hello:{
//       color:'white'
// }
});

AppRegistry.registerComponent('reactNativeTest', () => reactNativeTest);
