import { all, fork } from 'redux-saga/effects';
import UsersSaga from './users';


function* dataSaga() {
  yield all([
    fork(UsersSaga)
  ])
}


export default dataSaga;
