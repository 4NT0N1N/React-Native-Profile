import React, { Component } from 'react';
import { View,StyleSheet, Text, ActivityIndicator } from 'react-native';


import Champ from '../Champ'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [],loading: true };
  }

  componentDidMount() {
    const {id} = this.props 
    this.searchProfile(id);

  }

  componentDidUpdate(prevProps){
    const {id} = this.props  
    if(prevProps.id !== id){
        this.searchProfile(id);
    }
  }

  async searchProfile(id) { 
    try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`); 
    const data = await response.json()
    this.setState({user: data, loading:false})

    return  data; 
    } catch (error) {
    console.log(error); }
  }
    


  render() {

    const {user,loading} = this.state
    return (
      <View 
      style={styles.container}>
            <ActivityIndicator size="large" color="#66cdaa" animating={loading} style={styles.load}/>
            {user.name === undefined ?(
                <Text style = {{ color: "#FFF"}}>Attention cet utilisateur n'existe pas</Text>
            ) : 
            (<React.Fragment>
            <Champ name="Utilisateur :" value={user.name} /> 
             <Champ name="Username :" value= {user.username}/> 
             </React.Fragment>)
            }


             
      </View>
    );
  }

}

const styles = StyleSheet.create({
    container: { padding: 10,
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' , 
        borderWidth: 2, 
        borderColor: '#FFF', 
     },
     load: {
         position:'absolute',
         top: 150

     }
  });