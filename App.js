import React from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import Signup from './src/signup' ;
import Login from './src/login' ;
import Navigation from './src/components/Navigation' ;

export default class App extends React.Component {
  constructor(){
    super() ;
    this.state = {
      userdetail: [] ,
      checking: false ,
    }
  }
 
  componentDidMount(){
    AsyncStorage.getItem('@Signupdetails:userslist', (err , data) =>{
        if (err){
          console.error('error loaing detail' , err)
        } else {
          const userdetail = JSON.parse(data) ;
          this.setState({
            userdetail
          })
          console.log(userdetail)
        }
    })

    AsyncStorage.getItem('@loginchecking', (err , data) =>{
      if (err){
        console.error('error loaing detail' , err)
      } else {
        var checking= JSON.parse(data)
        console.log(checking)
        this.setState({
          checking
        })
        console.log(checking)
      }
  })
  }

  rendercomponent(){
    if(this.state.userdetail === []){
      return <Signup />
    } else if(!this.state.checking){
        return <Login /> 
      }else{
        <Navigation />
      }
    }

  render() {
    const { container, heading, input, image, container1 } = styles
    return (
      <View style={container}>
        {this.rendercomponent()}
        
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20 ,
  }
});