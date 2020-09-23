import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ImageDetail({imageSource, title}) {
    // console.log(props);
    return (
        <View style={styles.listImage}>
            <Image
                style={styles.image}
                source={{uri : imageSource}}
            />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.price}>150.000đ</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listImage:{
        height: 200,
        marginHorizontal: 5,
        width: 120
    },
    image: {
        // flex:1,
        width: 120,
        height: 120,
        resizeMode: "cover",
        borderRadius: 20
    },
    text:{
        fontSize: 14
    },
    price: {
        fontWeight: 700,
        color: "#f47422"
    }
});