import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ScanScreen =({navigation})=> {
    return(
    <View style={styles.container}>
        <Text > Scan</Text>
        
    </View>
    )
}
    
export default ScanScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})