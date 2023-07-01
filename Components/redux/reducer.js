/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { ADD_TO_CART } from "./constants";
const initailState = [];

export const reducer = (state = initailState, action)=>{
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.payload
            ]
        default:
           return state;  
    }
}
