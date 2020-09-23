import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import ImageDetail from './ImageDetail';
import { FontAwesome } from '@expo/vector-icons';


export default function ImageScreen({ title }) {
    return (
        <View>
            <View style={styles.titleHeader}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.seeMore}>Xem tất cả <FontAwesome name="angle-double-right" /></Text>
            </View>
            <ScrollView horizontal>
                <ImageDetail
                    title="Cắt tỉa lông cho mèo"
                    imageSource="https://lirp-cdn.multiscreensite.com/b65ff4e4/dms3rep/multi/opt/2453344_orig-640w.jpg"
                />
                <ImageDetail
                    title="Cắt tỉa lông cho chó dưới 3kg"
                    imageSource="https://miro.medium.com/max/4800/1*ocBBKYNfaMm7-kxRn7BRSQ.jpeg"
                />
                <ImageDetail
                    title="Cắt tỉa lông cho chó từ 3kg"
                    imageSource="https://wl-brightside.cf.tsp.li/resize/728x/jpg/d4b/3c2/e0bad95555bd0463900a6b1f48.jpg"
                />
                <ImageDetail
                    title="Cắt tỉa lông cho chim"
                    imageSource="https://i.pinimg.com/originals/d4/3b/6f/d43b6fdefcfbdba45071a07a10102e2e.jpg"
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    titleHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 5,
        // flex: 1,
        height: 30
    },
    title: {
        flex: 1,
        fontWeight: "bold"
    },
    seeMore: {
        fontSize: 13,
        color: "grey"
    }

});