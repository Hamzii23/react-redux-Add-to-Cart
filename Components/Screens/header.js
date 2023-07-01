/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useState } from 'react';
const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const [addCart, setAddCart] = useState(0);
  console.log(addCart);
  useEffect(() => {
    setAddCart(cartData.length);
  }, [cartData]);
  return (
    <View style={{ flex: 1, paddingBottom: 30 }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'right',
          backgroundColor: 'grey',
          padding: 20,
        }}
      >
        {' '}
        {addCart}
      </Text>
    </View>
  );
};
export default Header;
