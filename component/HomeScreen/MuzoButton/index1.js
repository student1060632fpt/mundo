import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function All() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Điểm đã nhận</Text>
    </View>
  );
}

function NotDelivery() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Điểm đã dùng</Text>
    </View>
  );
}


const TopTab = createMaterialTopTabNavigator();

export default function PointHistory() {
  return (
    
      <TopTab.Navigator>
        <TopTab.Screen name="all" component={All} 
            options={{title:'Điểm đã nhận'}} 
        />
        <TopTab.Screen name="notDelivery" component={NotDelivery}
         options={{title:'Điểm đã dùng'}}   
         />
      </TopTab.Navigator>
    
  );
}
