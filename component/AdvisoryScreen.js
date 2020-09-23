import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AdvisoryScreen =({navigation})=> {
    return(
    <View style={styles.container}>
        <Text > Advisory</Text>
        
    </View>
    )
}
    
export default AdvisoryScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})