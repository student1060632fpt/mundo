import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';

import PetBottle from '../../icon/pet-bottle.png';
import Title from '../Title';
import NextImage from '../../icon/next.png';


const Tab1 = ({navigation })=> {
  
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.border}>
                <View style={styles.inside} >
                    <Text style={styles.title1}>Ho va ten</Text>
                    <Text style={styles.title2}>Khach hang tu ngay...</Text>
                    <View style={{backgroundColor:'#fff', marginTop:10, padding:10, borderRadius:10, width:'60%', marginBottom:10,flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{color:'#ff6347'}}>Hang Bac </Text>
                        <Image source={PetBottle} style={{height:24, width:24,}}/>
                        <Text style={{color:'#ff6347'}}>100</Text>
                    </View>
                    <View>
                        <Text style={{color:'#fff'}}>Ban can 100 diem de thang hang vang</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity  onPress={() => navigation.navigate('PointHistory')}  
            style={{marginTop:20, borderBottomWidth:1 ,marginHorizontal:20, borderBottomColor:'#dcdcdc'}}>
                <Title title={'Lịch sử tích điểm'} image={NextImage} />             
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('TopTab')}
            style={{marginTop:20, borderBottomWidth:1 ,marginHorizontal:20, borderBottomColor:'#dcdcdc',}}
            >
                <Title title={'Ưu đãi'} image={NextImage} />             
            </TouchableOpacity>
            <View style={{marginTop:20, marginHorizontal:20, }}>
                <Text style={{fontWeight:'bold', fontSize:18}}>Quyền lợi thành viên</Text>
            </View>
        </SafeAreaView>
    ); 
  }
export default Tab1;

const styles=StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'#fff',
        
        paddingTop:20,
    },
    border:{
        backgroundColor:'#ff6347',
        borderRadius:15,
        height:150, 
        marginHorizontal:20
    },
    inside:{
        marginTop:10,
        paddingHorizontal:20
    },
    title1:{
        color:'#fff',
        fontWeight:'700',
        
    }, 
    title2:{
        color:'#dcdcdc',
        fontWeight:'100'
    },
   

})
