import React from 'react';
import {Image} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AdvisoryScreen from './AdvisoryScreen';
import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';
import ShoppingScreen from './ShoppingScreen';
import UserScreen from './UserScreen';

import Browser from './icon/browser.png';
import Headset from './icon/headset.png';
import Scan from './icon/qr-code.png';
import Shopping from './icon/shopping-cart.png';
import User from './icon/user.png';


import Icon from 'react-native-vector-icons/Ionicons';


const BottomTabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Screen222 = createStackNavigator();

const MainTabsScreen = () => (
<BottomTabs.Navigator
        initialRouteName='Home'
        tabBarOptions={{
            activeTintColor:'#ff8c00',
            inactiveTintColor:'gray'
        }}
      
    >
      <BottomTabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Image source={Browser} color={color}  style={{height:24, width:24}} />
           
          ),
        }}
      />
      <BottomTabs.Screen
        name="Shoping"
        component={ShoppingScreen}
        options={{
          tabBarLabel: 'Mua hàng',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Image source={Shopping} color={color}  style={{height:24, width:24}} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Scan"
        component={ScanScreen}
        options={{
          tabBarLabel: '',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Image source={Scan} color={color} style={{height:35, width:35, marginTop:10}} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Advisory"
        component={AdvisoryScreen}
        options={{
          tabBarLabel: 'Tư vấn',
   
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Image source={Headset} color={color} style={{height:24, width:24}} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarColor: '#FFF',
          tabBarIcon: ({ color }) => (
            <Image source={User} color={color}  style={{height:24, width:24}} />
          ),
        }}
      />
</BottomTabs.Navigator>
);

export default  MainTabsScreen;

