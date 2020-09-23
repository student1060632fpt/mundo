import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import ShoppingHeader from './ShoppingScreen/ShoppingHeader';
import ListIcon from './ShoppingScreen/ListIcon';
import CarouselBanner from './ShoppingScreen/CarouselBanner';
import ImageScreen from './ShoppingScreen/ImageScreen';
import BannerAd from './ShoppingScreen/BannerAd';

const ShoppingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ShoppingHeader />
            <ScrollView>
                <CarouselBanner />
                <ListIcon />
                <ImageScreen title="Dịch vụ cắt tỉa lông"/>
                <ImageScreen title="Dịch vụ tắm"/>
                <ImageScreen title="Dịch vụ trông giữ"/>
                <BannerAd />
                <ImageScreen title="Dịch vụ cắt tỉa lông"/>
            </ScrollView>
        </View>
    )
}

export default ShoppingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

})