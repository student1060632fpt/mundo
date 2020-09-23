import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView, Image } from 'react-native';

import PetImage from '../../icon/pet.png';
import WheelImage from '../../icon/wheel.jpg';
import BackImage from '../../icon/arrow.png';
import IndexItem from './indexItem';

const DiscountItem = ({ navigation})=> {
   
    return (
        
        <IndexItem image={PetImage} text="Khuyến mãi cho khách hàng mua trực tiếp tại cửa hàng"/>
      
        
    );
  }
  export default DiscountItem;

  