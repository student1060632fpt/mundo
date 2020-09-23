import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';



const Category1 =(props) => {
    const {image,text} = props
    
    return(    
        <TouchableOpacity style={{backgroundColor:'#fff', marginHorizontal:10, height:180, width:'50%', flex:1}}>
            
                <View style={{flex:3, }}>
                <Image source={image} style={{flex:1, resizeMode:'cover',height:null, width:null,
              
                borderRadius:10
                }}/>
                </View>
                <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                <Text>
                    {text}</Text>
                </View>
       
        </TouchableOpacity> 
       
    )
}
    
export default Category1;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})