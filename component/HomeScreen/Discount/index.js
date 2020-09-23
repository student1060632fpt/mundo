import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';

const Style = (props)=> {
    const {image,text} = props
    return (
     
        <SafeAreaView >
            <View style={{marginTop:15}}>
                <View style={{height:130}}>
                <View style={{flex:1}}>
                  <Image source={image} style={{
                    flex:1, 
                    resizeMode:'cover', 
                    height:null,
                    width:null,
                    marginHorizontal:20,
                    borderRadius:15}}/>
                </View>
            </View>
            <Text style={{marginHorizontal:20,marginTop:5}}>{text}</Text>
            </View>
       </SafeAreaView>
   

    ); 
  }
export default Style;


