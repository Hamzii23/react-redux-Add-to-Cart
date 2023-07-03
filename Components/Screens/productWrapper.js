/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import ProductData from '../../Models/ProductData';
import Header from './header';
import Product from './product';

const ProductWraper = ({navigation}) => {
  return (
    <View style={{}} >
      <Button title='go to user' onPress={()=>navigation.navigate('User')}/>
      <Header />
      <ScrollView>
      {
        ProductData.map((item) =><Product key={item.id} items={item}/>)
      }
      </ScrollView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    color:'white',
  },
});

export default ProductWraper;
