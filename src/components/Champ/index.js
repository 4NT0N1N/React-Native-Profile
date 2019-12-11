import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Champ extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    const { name, value } = this.props

    return (
      
          <View style={{ flexDirection: "row", justifyContent: 'space-around', alignItems: 'center'}}>
            <Text style={styles.text}>
                {name}
            </Text>
            <Text style={styles.text}>
                {value}
            </Text>
          </View>
    );
  }

}

const styles = StyleSheet.create({
    text: {
      color: "#000",
      fontSize: 20,
      width: "45%",
    }
  });