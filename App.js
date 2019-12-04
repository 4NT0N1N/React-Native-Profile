/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView
} from 'react-native';

import SearchBar from './src/components/SearchBar'
import Profile from './src/components/Profile'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {id: '1'};
  }


  less = (id) => {
    let number = parseInt(id)
    number = number - 1
    if(number === 0)
    {
      number = 10
    }

    const backToString = number.toString()
    this.setState({id: backToString})
  }

  more = (id) => {
    let number = parseInt(id)
    number = number + 1
    if(number === 11)
    {
      number = 1
    }

    const backToString = number.toString()
    this.setState({id: backToString})
  }


  render(){

  const {id} = this.state
  console.log('id = ' + id )

    return (
    <View style={styles.container}>
      <SafeAreaView>
          <SearchBar onSearch={(text) => {this.setState({id: text})}} />
          <Profile id= {id} />
          <View style={styles.arrows}>
            <Button title="Previous" color="#FFF" onPress={() => {this.less(id)}}/>
            <Button title="Next" color="#FFF" onPress={() => {this.more(id)}}/>
          </View>
      </SafeAreaView>
    </View>
);}

  
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#303338",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  arrows: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
});

export default App;
