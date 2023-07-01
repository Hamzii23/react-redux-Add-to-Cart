/* eslint-disable prettier/prettier */
import { ADD_TO_CART } from "./constants";

export function addToCart(props){
    return{
        type:ADD_TO_CART,
        payload:props.item,
    }
}
// payload mean data