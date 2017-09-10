import React ,{ Component } from 'react' ;
import { View, Text , StyleSheet } from 'react-native' ;

export default class Addpatient extends Component {
  static navigationOptions = {
      tabBarLabel: 'Add Person' ,
          tabBarIcon:  () => (
                    <Image
                    source={require('../img/home.png')}
                    style={[styles.tabIcon, {tintColor: 'gray'}]}
                    />
                    )
      
  }

    render(){
        return(
            <View style = { styles.container} >
               <Text> addpatient</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    tabIcon: {
      width: 56,
      height: 56,
    },
    tabStyle: {
      height: 40
  }
  });