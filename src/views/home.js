import React from "react";
import { View, Text, Button } from "react-native";
import Profile from "../components/Profile";

class Home extends React.Component {

  static navigationOptions = () => {
    return {
      title: "Home",
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  render() {
    const {navigation} =this.props
    // const id = navigation.getParam('value')
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
        <Profile id={id} />
      </View>
    );
  }
}

export default Home;