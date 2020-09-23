import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const User =({navigation})=> {
    return(
    <View style={styles.container}>
        <Text > User</Text>
        
    </View>
    )
}
    
export default User;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})