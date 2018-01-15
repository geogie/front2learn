import { takeLatest } from 'redux-saga/effects';
import {registerUserAsync, loginUserAsync} from './users';
import {REGISTER_USER, LOGIN_USER} from '../action/users';

export default function* rootSaga() {
  yield [
    takeLatest(REGISTER_USER, registerUserAsync),
    takeLatest(LOGIN_USER, loginUserAsync)
  ];
}
