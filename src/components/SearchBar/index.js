import React, { Component } from 'react';
import { Button, TextInput, View, Platform } from 'react-native';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {

    const {text} = this.state

    return (
      <View style={{ padding: 10, alignSelf: 'center' }}>
        <TextInput
          style={{height: 40, color :"#FFF", textAlign: 'center'}}
          placeholder="Id de l'utilisateur"
          placeholderTextColor = "#FFF"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          maxLength={2}
        />
        <Button 
            color ={Platform.OS === "ios" ? "#FFF" : "#000"} 
            title= "Valider"
            onPress={() => {this.props.onSearch(text)}}
        /> 
      </View>
    );
  }

}