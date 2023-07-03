import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import root_Reducer from './root_Reducer';
import SagaData from './saga';
const SagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: root_Reducer,
  middleware: () => [SagaMiddleware],
});
SagaMiddleware.run(SagaData);
export default store;
