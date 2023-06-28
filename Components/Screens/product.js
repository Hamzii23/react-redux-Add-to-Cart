/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';
const Product = (props) => {
  
  return (
    <View style={{alignItems:'center',marginBottom:10}}>
          <Image style={{width:150, height:150,}} source={{uri:props.items.image}}/>
          <View style={{flexDirection:"row",margin:20,}}>
          <Text style={style.TextOne}>{props.items.name}</Text>
          <Text style={style.TextOne}>{props.items.price}</Text>
          <Text style={style.TextOne}>{props.items.color}</Text>
          </View>
          <Button title='Add to Card' onPress={()=>{console.log("Add to Cart")}}/>
        </View>
          );
};
const style =StyleSheet.create({
  TextOne:{
    fontSize:24,borderWidth:1, borderRadius:2, backgroundColor:"grey", paddingRight:20
  }
})
export default Product;
