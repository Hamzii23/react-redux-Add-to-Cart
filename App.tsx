/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './Components/Screens/header';
import Product from './Components/Screens/product';
import ProductData from './Models/ProductData';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
    <View  >
      <Header />
      <ScrollView>
      {
        ProductData.map((item) =><Product items={item}/>)
      }
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    color:'white'
  },
});

export default App;
