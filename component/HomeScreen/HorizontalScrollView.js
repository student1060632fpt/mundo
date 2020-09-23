import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';



const Category =(props) => {
    const {image,text, navigation, component} = props
    
    return(    
        <TouchableOpacity onPress={() => navigation.navigate(component)}>
            <View style={{height:150,width:220, backgroundColor:'#fff', marginLeft:10}}>
                <View style={{flex:2}}>
                <Image source={image} style={{flex:1, resizeMode:'cover', height:null,width:null,
                marginRight:10,
                borderRadius:10
                }}/>
                </View>
                <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Text>
                    {text}</Text>
                </View>
            </View>
        </TouchableOpacity> 
       
    )
}
    
export default Category;

