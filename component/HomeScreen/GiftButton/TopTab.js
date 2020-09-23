import React, { Component} from 'react'
import { View, Text, Button, StyleSheet,ScrollView} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const TopTabs = createMaterialTopTabNavigator();

import Tab1 from './Tab1'
import Tab2 from './Tab2'





const TopTab =(navigation) => {
    return (
     
    
 <TopTabs.Navigator  >
  
    <TopTabs.Screen name="Home" component={Tab1} 
           options={{
            title: 'Ưa đãi',
            headerStyle: {
              backgroundColor: '#ff6347',
            },
            headerTintColor: '#fff',
            headerTitleAlign:'center',
            headerTitleStyle: {
              fontWeight: '100',
            },
          }}
        
        />
        <TopTabs.Screen name="Notifications" component={Tab2}
             options={{
                title: 'Ưa đãi của bạn',
                headerStyle: {
                  backgroundColor: '#ff6347',
                },
                headerTintColor: '#fff',
                headerTitleAlign:'center',
                headerTitleStyle: {
                  fontWeight: '100',
                },
              }}
        />
 
       
      
      </TopTabs.Navigator>
      
    );
  }
 
  

export default TopTab;
