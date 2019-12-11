import React, {Component} from 'react';
import { Button, Text, View, Platform } from 'react-native';
import Profile from '../../components/Profile';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = ({ navigation }) => { 
    return {title: navigation.getParam('name') ,}
  };

  render() {

    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const id = navigation.getParam('id');

    return (
      <View style={{ padding: 10, flex: 1}}>
          <Profile id={id} />
      </View>
    );
  }

}