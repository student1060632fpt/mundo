import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function All() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function NotDelivery() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Delivering() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  function Delivered() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  function Cancelled() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

const TopTab = createMaterialTopTabNavigator();

export default function Deal() {
  return (
    
      <TopTab.Navigator>
        <TopTab.Screen name="all" component={All} options={{title:'Tất cả'}} />
        <TopTab.Screen name="notDelivery" component={NotDelivery}
            options={{
                title: 'Chưa giao',
                headerStyle: {
                backgroundColor: '#ff6347',
                fontSize: 10
                },
                headerTintColor: '#fff',
                headerTitleAlign:'center',
                headerTitleStyle: {
                fontWeight: '100',
                },
            }}

         />
        <TopTab.Screen name="delivering" component={Delivering} options={{title:'Đang giao'}}/>
        <TopTab.Screen name="delivered" component={Delivered} options={{title:'Đã giao'}} />
        <TopTab.Screen name="cancelled" component={Cancelled} options={{title:'Đã hủy'}}/>
      </TopTab.Navigator>
    
  );
}
