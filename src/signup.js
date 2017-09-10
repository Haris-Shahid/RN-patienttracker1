import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button, Image, AsyncStorage } from 'react-native';

class Signup extends React.Component {
  constructor(){
    super() ;
    this.state = {
      name: '' ,
      fname: '' ,
      email: '' ,
      password: '',
      userdetail: []
      
      
    }
  }
  
  submitsignup(){
    const {name , fname , email , password } = this.state ;  
    console.log('working')
    let details = {
      name,
      fname,
      email ,
      password
    }
    AsyncStorage.setItem('@Signupdetails:userslist',JSON.stringify(details))
    // console.log(details)
    this.setState({
      name: '' ,
      fname: '' ,
      email: '' ,
      password: ''
    })
  
  }

  render() {
    const { container, heading, input, image, container1 } = styles
    return (
      <View style={container}>
        <View>
        <Image style={image} source={require('./img/PT.png')}/>
        </View>
        <View style={container1} >
          <Text style = {heading} >Signup Form</Text>
          <View>
          <TextInput
                style={input}
                value={this.state.name}
                placeholder= {'Type your Name...'}
                placeholderTextColor= {'#dc143c'}
                selectionColor= {'#660000'}
                underlineColorAndroid= {'#660000'}
                onChangeText={(name)=> this.setState({name})}
              />
            <TextInput
                style={input}
                value={this.state.fname}
                placeholder= {'Type your Father Name...'}
                placeholderTextColor= {'#dc143c'}
                selectionColor= {'#660000'}
                underlineColorAndroid= {'#660000'}
                onChangeText={(fname)=> this.setState({fname})}
              /> 
            <TextInput
                style={input}
                value={this.state.email}
                placeholder= {'Type your Email...'}
                placeholderTextColor= {'#dc143c'}
                selectionColor= {'#660000'}
                underlineColorAndroid= {'#660000'}
                onChangeText={(email)=> this.setState({email})}
              />
              <TextInput
                style={input}
                value={this.state.password}
                placeholder= {'Type your Password...'}
                placeholderTextColor= {'#dc143c'}
                selectionColor= {'#660000'}
                underlineColorAndroid= {'#660000'}
                secureTextEntry= {true}
                onChangeText={(password)=> this.setState({password})}
              />
              <Button
                onPress={this.submitsignup.bind(this)}
                title="Submit"
                color="#8b0000"
                underlayColor='black'
              />
            </View>
        </View>
      </View>
    );
  }
}

const { height, width} = Dimensions.get('window') ;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 20 ,
  },
  container1: {
    justifyContent: 'center' ,
    alignItems: 'center'
  },
  heading: {
    fontSize: 25 ,
    color: '#8a0707' ,
    fontWeight: 'bold' ,
  },
  input: {
    height: 60,
    paddingLeft: 10 ,
    width: width - 50 ,
  },
  image: {
    width: width - 70 ,
    height: 150 ,
  },
});

export default Signup ;