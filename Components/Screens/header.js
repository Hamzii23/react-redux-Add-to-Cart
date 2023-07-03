/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const [addCart, setAddCart] = useState(0);
  // console.log(addCart);
  useEffect(() => {
    setAddCart(cartData.length);
  }, [cartData]);
  // console.log(addCart)
  return (
    <View >
      <Text
        style={{
          fontSize: 20,
          textAlign: 'right',
          backgroundColor:'grey',
          padding: 20,
          color:'white'
        }}
      >
        {addCart}
      </Text>
    </View>
  );
};
export default Header;
