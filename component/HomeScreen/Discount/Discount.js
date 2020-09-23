import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';

import WheelImage from '../../icon/wheel.jpg';
import PetImage from '../../icon/pet.png';

import Style from './index';

const Discount = ({navigation })=> {

    return (
      <ScrollView>
        <SafeAreaView>
          <TouchableOpacity onPress={() => navigation.navigate('DiscountItem')}>
            <Style image={WheelImage} text="Ưu đãi dành riêng cho khách hàng mua sắm tại cửa hàng"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DiscountItem1')}>
          <Style image={PetImage} text="Ưu đãi dành riêng cho khách hàng mua sắm tại cửa hàng"/>
          </TouchableOpacity>   
        </SafeAreaView>
      </ScrollView>
      
    ); 
  }
export default Discount;


