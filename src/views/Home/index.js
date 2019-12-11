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
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  Platform,
  FlatList
} from 'react-native';

import SearchBar from '../../components/SearchBar'
import Profile from '../../components/Profile';



class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '1',
      users: []
    };
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


  componentDidMount(){
    this.getUsers()
  }

  async getUsers() { 
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/`); 
    const data = await response.json()
    this.setState({users: data})
    return  data; 
    } catch (error) {
    console.log(error); }
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

  const {navigate} = this.props.navigation;

    function Item({ name, id }) {

      console.log('id = ' + id)
          return (
            <TouchableOpacity style={{backgroundColor:"#121212", padding: 10, borderRadius: 5}} onPress={() => {navigate('Profile', {id: id, name: name
            })}}>
              <Text style={{color : Platform.OS === "ios" ? "#000" : "#FFF", fontSize: 16, textAlign: 'center'}} >{name}</Text>
            </TouchableOpacity>
          );
    }

  const {id, users} = this.state
    return (
    <View style={styles.container}>
      <SafeAreaView>
          {/* <SearchBar onSearch={(text) => {this.setState({id: text})}} /> */}
          {/* <Profile id= {id} /> */}
          <FlatList 
            data={users} 
            renderItem={({ item }) => <Item name={item.name} id={item.id} />}  
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{justifyContent: 'space-around', height: "100%"}}
          />
          {/* <View style={styles.arrows}>
            <Button title="Previous" color ={Platform.OS === "ios" ? "#FFF" : "#000"}  onPress={() => {this.less(id)}}/>
            <Button title="Next" color ={Platform.OS === "ios" ? "#FFF" : "#000"}  onPress={() => {this.more(id)}}/>
          </View> */}
      </SafeAreaView>
    </View>
);}

  
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#303338",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  arrows: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }
});

export default Home;
