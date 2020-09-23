import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from 'react-native';



const IndexItem = (props)=> {
   const {image,text} = props
    return (
        <View>    
            <View style={{ height:180, width:'100%', flexDirection:'row', backgroundColor:'#ff6347'}}>
             
                <Image source={image} 
                    style={{
                        flex:1, 
                        resizeMode:'cover', 
                        height:null,
                        width:null,
                    }}
                />
            </View>
            <View style={{flex:1, marginHorizontal:20, marginTop:10}}>
                    <Text style={{fontWeight:'100', fontSize:20,textAlign:"center"}}>{text}</Text>
                </View>  
        </View>
    );
  }
  export default IndexItem;

  