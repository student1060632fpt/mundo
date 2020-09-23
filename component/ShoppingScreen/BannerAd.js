import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

const BannerAd = () => {
    return (
        <View style={styles.viewImage}>
            <Image
                style={styles.image}
                source={{uri: 'https://gooddogsa.com/media/W1siZiIsIjIwMTgvMDMvMjkvM2swZmdvNmo2bl9nb29kZG9nX2JyZWVkZXJfYmFubmVyLmpwZyJdLFsicCIsInRodW1iIiwiOTQyeDMyNiMiXV0/gooddog-breeder-banner.jpg'}}
            />
        </View>
    )
}

export default BannerAd

const styles = StyleSheet.create({
    viewImage:{
        flex: 1,
        height: 150
    },
    image: {
        width: "100%",
        height: 100,
    }
})
