import React, { Component } from "react";
import Addpatient from "./addpatient";
import Patientdetails from "./patientdetails";
import Patientlist from "./patientlist";
import { StackNavigator, TabNavigator } from 'react-navigation' ;


const Navigation = TabNavigator({
  Patientlist: { screen : Patientlist  },
  Addpatient: { screen : Addpatient  },
  Patientdetails: { screen : Patientdetails  },
},{
  tabBarOptions: {
    activeTintColor: 'white' ,
    inactiveTintColor: '#8a0707' ,
    swipeEnabled: true ,
    showLabel: false ,
    style:{
      backgroundColor: 'black' ,
      flex: 1 ,
    },
  },
});

export default Navigation;
