/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';
import { addToCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
const Product = (props) => {
  const dispatcher = useDispatch();
  const handleAddtoCart = (items)=>{
    // console.log("Press Me",items)
    dispatcher(addToCart(items));
  };
  
  return (
    <View style={{alignItems:'center',marginBottom:10,paddingTop:30}}>
          <Image style={{width:150, height:150,}} source={{uri:props.items.image}}/>
          <View style={{flexDirection:"row",margin:20,}}>
          <Text style={style.TextOne}>{props.items.name}</Text>
          <Text style={style.TextOne}>{props.items.price}</Text>
          <Text style={style.TextOne}>{props.items.color}</Text>
          </View>
          <Button title='Add to Card' onPress={()=> handleAddtoCart(props.items)}/>
        </View>
          );
};
const style =StyleSheet.create({
  TextOne:{
    fontSize:24,borderWidth:1, borderRadius:2, backgroundColor:"grey", paddingRight:20
  }
})
export default Product;
