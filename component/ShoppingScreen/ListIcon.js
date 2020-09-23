import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ShoppingScreen = ({ navigation }) => {
    const petIcon = [
        { name: 'pets', source: "IconMaterial" },
        { name: 'cat', source: "FontAwesome5" },
        { name: 'dog', source: "FontAwesome5" },
        { name: 'earlybirds', source: "FontAwesome5" },
        { name: 'fish', source: "FontAwesome5" },
        { name: 'pets', source: "IconMaterial" },
    ];
    return (
        <View
            style={styles.flatList}
        >
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(pet) => pet.name}
                data={petIcon}
                renderItem={({ item }, index) => {
                    return (
                        <View key={index} style={styles.listPetIcon}>
                            <View style={styles.listIcon}>
                                {item.source === "IconMaterial" ?
                                    (<IconMaterial name={item.name} style={styles.icon} />)
                                    :
                                    (<FontAwesome5 name={item.name} style={styles.icon} />)
                                }
                            </View>
                            <Text style={styles.textStyle}>{item.name}</Text>
                        </View>
                    );
                }}
            />
        </View>
    )
}

export default ShoppingScreen;

const styles = StyleSheet.create({
    flatList: {
        height: 120,
        // backgroundColor: "#e2e2e2",
    },
    listPetIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        // height: 120
    },
    listIcon: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#f47422",
        borderRadius: 10,
        marginHorizontal: 10,
        height: 60,
        width: 60,
    },
    icon: {
        fontSize: 30,
        color: "white",
    },
    textStyle: {
        marginTop: 7,
        // fontWeight: "bold"
    },
})