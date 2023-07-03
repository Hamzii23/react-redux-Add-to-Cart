import { takeEvery } from 'redux-saga/effects';
import { USER_LIST } from './constants';

function* userList() {
  const URL = 'https://dummyjson.com/users';
  let data = yield fetch(URL);
  data = yield data.json();
  console.log(data);
}
function* SagaData() {
  yield takeEvery(USER_LIST, userList);
}
export default SagaData;
// connect to Store File
