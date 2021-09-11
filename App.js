import React, { Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component{
  render(){
    return(
      <View style={styles.abc}>
        <HomeScreen />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  abc:{
    flex:1,
    borderWidth:20,
    borderColor:"red",
    backgroundColor:'yellow',
  }
})
