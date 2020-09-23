import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

const { width } = Dimensions.get("window");
const height = width * 0.6;
const images = [
    'https://mobimg.b-cdn.net/pic/v2/gallery/preview/oshki_oty_otiki-sobaki-zhivotnye-40464.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWQ4gzb0nGFB-E79y1d59FDrte_ht5Gw69Og&usqp=CAU',
    'https://bestwallpapers.in/wp-content/uploads/2018/04/cute-cat-dog-animal-4k-wallpaper-1024x683.jpg',
    'https://cdn.wallpapersafari.com/44/83/iVoxRc.jpg',
]

const CarouselBanner = () => {
    const [active, setActive] = useState(0);

    const change = event => {
        const slide = Math.ceil(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
        if (slide !== active){
            setActive(slide);
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView
                pagingEnabled
                horizontal
                onScroll={change}
                showsHorizontalScrollIndicator={false}
                style={{ width, height }}
            >

                {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.listImage}
                    />
                ))}

            </ScrollView>
            <View style={styles.paginator}>
                {
                    images.map((image, index) => (
                        <Octicons key={index} name="primitive-dot" style={index === active? styles.pagingActiveText : styles.paginText} />
                    ))
                }

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        borderRadius: 10,
        width,
        height
    },
    scroll: {
        width,
        height
    },
    listImage: {
        width,
        height,
        resizeMode: "cover"
    },
    paginator: {
        flexDirection: "row",
        alignSelf: "center"
    },
    paginText: {
        fontSize: 20,
        color: "#888",
        margin: 3
    },
    pagingActiveText: {
        fontSize: 20,
        color: "#f47422",
        margin: 3
    }
})
export default CarouselBanner
