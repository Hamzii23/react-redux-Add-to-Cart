import { configureStore } from '@reduxjs/toolkit';
import root_Reducer from './root_Reducer';
const store = configureStore({
  reducer: root_Reducer,
});
export default store;
