/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { ADD_TO_CART, REMOVE_TO_CART } from './constants';
const initailState = [];

export const reducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_TO_CART:
      let result = state.filter((item) => item.id != action.payload);
      return [...result];
    default:
      return state;
  }
};
