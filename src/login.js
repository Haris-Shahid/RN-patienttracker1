import React from 'react';
import { AsyncStorage, StyleSheet, Text, View, TextInput, Dimensions, Button, Image } from 'react-native';
import Navigation from './components/Navigation' ;

class Login extends React.Component {
  constructor(){
    super() ;
    this.state = {
      email: '' ,
      password: '' ,
      userdetail: [] ,
      checking: false
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
        }
    })

  }

  check(){
    let email = this.state.email ;
    let password = this.state.password ;
    let checkemail = this.state.userdetail.email ;
    let checkpassword = this.state.userdetail.password ;
    if(email == checkemail && password == checkpassword){
      console.log('login successful')
      var checking = !this.state.checking ;
      this.setState({
        checking
      })
      AsyncStorage.setItem('@loginchecking',JSON.stringify(checking))
    }else{
      console.log('unsuccessful')
    }

  }

  render() {
  if(this.state.checking=== false){
    const { container, heading, input, image, container1 } = styles
            return (
              <View style={container}>
                  <View>
                  <Image style={image} source={require('./img/PT.png')}/>
                  </View>
                  <View style={container1} >
                    <Text style = {heading} >Login Form</Text>
                    <View>
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
                          onPress={this.check.bind(this)}
                          title="Submit"
                          color="#8b0000"
                          underlayColor='black'
                        />
                      </View>
                  </View>
                </View>
              );
  }else{
    return( <Navigation /> )
  }
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

export default Login ;