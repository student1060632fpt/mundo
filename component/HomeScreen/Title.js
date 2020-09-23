import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';



const Title =(props) => {
    const {title, image} = props
    
    return(    
        <View style={{ backgroundColor:'#fff', flexDirection:'row',justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
        <Text style={{fontSize:18, fontWeight:'600'}}>
           {title}
        </Text>
        <Image source={image} style={{height:15,width:15}}/>
      </View>
       
    )
}
    
export default Title;

