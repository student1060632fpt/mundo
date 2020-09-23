import React from 'react';
import  { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';

import HomeScreen from './HomeScreen';
import TopTab from './HomeScreen/GiftButton/TopTab';
import MainTabScreen from './MainTabScreen';
import Muzo from './HomeScreen/MuzoButton/index';
import Deal from './HomeScreen/DeliveryButton/index';
import PointHistory from './HomeScreen/MuzoButton/index1';
import Discount from './HomeScreen/Discount/Discount';
import DiscountItem from './HomeScreen/Discount/DiscountItem';
import DiscountItem1 from './HomeScreen/Discount/DiscountItem1';

const Stack = createStackNavigator();


const AppNavigator = () => {
    const configs = [
        
        { name: 'Main', title: 'Quà tặng', component: MainTabScreen, shown: false},
        { name:'TopTab', title: 'Quà tặng', component:TopTab},
        { name: 'Muzo', title: ' Tích lũy Muzo', component:Muzo},
        { name: 'Deal', title: 'Giao dịch',component:Deal},
        { name: 'PointHistory', title: 'Lịch sử điểm',component:PointHistory},
        { name: 'Discount', title: 'Khuyến mãi hôm nay', component:Discount},
        { name: 'DiscountItem', title:'', component:DiscountItem , shown:false},
        { name: 'DiscountItem1', title:'', component:DiscountItem1 , shown:false},

    ]
    const stackScreens = configs.map(config => {
        return (
            <Stack.Screen key={config.name} name={config.name} component={config.component}
            options={{
                title: config.title,
                headerShown:config.shown,
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
        )
    })
    return(
     
        <Stack.Navigator initialRouteName="Main">
            {stackScreens}
         
        </Stack.Navigator>
  
    );
}


export default AppNavigator;