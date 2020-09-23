import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import { Feather, AntDesign } from '@expo/vector-icons';

const ImageScreen = () => {
    return (
        <View style={styles.background_header}>
            <View style={styles.background_search}>
                <TextInput
                    placeholder="Tìm kiếm"
                    style={styles.inputStyle}
                />
                <Feather name="search" style={styles.icon_search} />
            </View>
            <AntDesign name="shoppingcart" style={styles.icon_shopping_cart} />
        </View>
    )
}
export default ImageScreen;
const styles = StyleSheet.create({
    background_header: {
        backgroundColor: '#f47422',
        padding: "10px 20px",
        flexDirection: 'row',
        alignItems: 'center',
    },
    background_search: {
        backgroundColor: "white",
        height: 35,
        borderRadius: 50,
        marginHorizontal: 15,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    inputStyle: {
        fontSize: 12,
        marginHorizontal: 15,
        // help to make the width of text input as long as the input field 
        flex: 1,
        color: "#e2e2e2"
    },
    icon_search: {
        fontSize: 22,
        color: "#e2e2e2",
        marginRight: 10,
        alighSelf: 'center'
    },
    icon_shopping_cart: {
        fontSize: 22,
        color: "white",
        marginRight: 10,

    }
})