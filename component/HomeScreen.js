import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

import GiftImage from './icon/gift.png';
import MoneyImage from './icon/money.png';
import PaperImage from './icon/paper.png';
import NextImage from './icon/next.png';
import WheelImage from './icon/wheel.jpg';
import PetImage from './icon/pet.png';

import HorizontalScrollView from './HomeScreen/HorizontalScrollView';
import RecommendedHome from './HomeScreen/RecommendedHome';
import Title from './HomeScreen/Title'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.header}>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>


          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Muzo')}
            >
              <View style={styles.border}>
                <Image source={MoneyImage} style={styles.image} />
                <Text style={styles.title}>Tích lũy muzo</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('TopTab')}
            >
              <View style={styles.border}>
                <Image source={GiftImage} style={styles.image} />
                <Text style={styles.title}>   Quà tặng   </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Deal')}
            >
              <View style={styles.border}>
                <Image source={PaperImage} style={styles.image} />
                <Text style={styles.title}>   Giao dịch   </Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Discount')}
              style={{ marginHorizontal: 10 }}
            >
              <Title title={'Khuyến mãi hôm nay'} image={NextImage} />
            </TouchableOpacity>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{ backgroundColor: '#fff' }}
            >
              <HorizontalScrollView text="Ưu đãi lớn dành riêng cho khách hàng mua sắm tại cửa hàng "
                image={WheelImage} navigation={navigation} component='DiscountItem'
              />
              <HorizontalScrollView text="khuyen mai" image={PetImage} navigation={navigation} component='DiscountItem1' />
              <HorizontalScrollView text="Ưu đãi lớn dành riêng cho khách hàng mua sắm tại cửa hàng "
                image={WheelImage} navigation={navigation} component='DiscountItem'
              />
            </ScrollView>
            <View style={{}}>
              <TouchableOpacity style={{ marginHorizontal: 10 }}
              >
                <Title title={'Tin tức'} image={NextImage} />
              </TouchableOpacity>

            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#fff', marginBottom: 20 }}>
              <RecommendedHome text="Ưu đãi lớn dành riêng cho khách hàng mua sắm tại cửa hàng " image={PetImage} />
              <RecommendedHome text="Ưu đãi lớn dành riêng cho khách hàng mua sắm tại cửa hàng " image={WheelImage} />
            </View>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#fff', }}>
              <RecommendedHome text="Ưu đãi lớn dành riêng cho khách hàng mua sắm tại cửa hàng " image={PetImage} />
              <RecommendedHome text="Ưu đãi lớn dành riêng cho khách hàng mua sắm tại cửa hàng " image={WheelImage} />
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    height: 80,
    backgroundColor: '#ff6347',

  },
  box: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  border: {
    marginTop: 10,
    alignItems: 'center',
    shadowColor: '#000',
    padding: 10,
    borderRadius: 15,
    elevation: 2,
    shadowRadius: 10,
    shadowOpacity: 0.3,
    textShadowOffset: { width: 0, height: 0 }

  },
  image: {
    height: 50,
    width: 50,
    marginBottom: 5,

  },
  title: {

  }
})