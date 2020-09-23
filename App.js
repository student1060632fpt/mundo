import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {Router, Scene} from 'react-native-router-flux';




import AppNavigator from './component/AppNavigator';
import TopTab from './component/HomeScreen/GiftButton/TopTab';
import MainTabScreen from './component/MainTabScreen';
export default function App() {
  return (

    

   <NavigationContainer>
     {/* <MainTabScreen/> */}
     <AppNavigator/>
     {/* <TopTab/> */}
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
