import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const Tab1 = ({  })=> {
    
    return (
      

          <View style={styles.container}>
              <View style={styles.list}>
                   <Text>Ưu Đãi</Text>
              </View>
          </View>
           
       
      
    );
  }
  export default Tab1;

  const styles= StyleSheet.create({
      container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
          
      }
    
  })
  