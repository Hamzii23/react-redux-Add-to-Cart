/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';
import { addToCart, removeToCart } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Product = (props) => {
  const item = props.items;
  // console.log(item);
  const dispatcher = useDispatch();
  const cartItems = useSelector((state)=>state.reducer);
  // console.log(cartItems)
  const [isAdditem,setaddItem] = useState(false);
  useEffect(()=>{
    let result = cartItems.filter((element)=>{
      return element.id === item.id;

    });
    // console.log(result); 
    if(result.length){
      setaddItem(true);
    }else{
      setaddItem(false);
    }
   
  },[cartItems, item.id]);
 
 
  const handleAddtoCart = (item)=>{
    dispatcher(addToCart(item));
  };
  const handleRemovetoCart = (item)=>{
    dispatcher(removeToCart (item.id));
  };
  
  
  return (
    <View style={{alignItems:'center',marginBottom:10,paddingTop:30}}>
          <Image style={{width:150, height:150,}} source={{uri:props.items.image}}/>
          <View style={{flexDirection:'row',margin:20,}}>
          <Text style={style.TextOne}>{props.items.name}</Text>
          <Text style={style.TextOne}>{props.items.price}</Text>
          <Text style={style.TextOne}>{props.items.color}</Text>
          </View>
          {
            isAdditem ? 
            <Button title="Remove to Card" onPress={()=> handleRemovetoCart(item)}/>
            :
            <Button title="Add to Card" onPress={()=> handleAddtoCart(item)}/>
          }
          
        </View>
          );
};
const style = StyleSheet.create({
  TextOne:{
    fontSize:24,borderWidth:1, borderRadius:2, backgroundColor:'grey', paddingRight:20
  }
});
export default Product;
