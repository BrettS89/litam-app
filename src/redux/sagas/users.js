import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';

export default [
  loginWatcher,
];

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const { user, token } = yield call(api.login, form);
    yield AsyncStorage.setItem('token', token);
    yield put({ type: actions.SET_USER_DATA, payload: user });
    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    console.log('registerHandler error: ', e.message);
  }
}
