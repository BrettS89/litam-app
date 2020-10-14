import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';
import setAlarmsInEmitter from '../../utils/setAlarmsInEmitter';
import alert from '../../utils/alert';

export default [
  loginWatcher,
  isLoggedInWatcher,
  registerWatcher
];

function * registerWatcher() {
  yield takeLatest(actions.ON_REGISTER, registerHandler);
}

function * loginWatcher() {
  yield takeLatest(actions.ON_LOGIN, loginHandler);
}

function * isLoggedInWatcher() {
  yield takeLatest(actions.CHECK_IS_LOGGED_IN, isLoggedInHandler);
}

function * registerHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const { user, token } = yield call(api.register, form);
    yield AsyncStorage.setItem('token', token);
    yield put({ type: actions.SET_USER_DATA, payload: user });

    const promiseArr = [
      api.getMyAlarms(),
      api.getAlarms(),
    ];

    const [{ myAlarms }, { alarms }] = yield Promise.all(promiseArr);

    yield put({ type: actions.SET_MY_ALARMS, payload: myAlarms });
    yield put({ type: actions.SET_ALARMS, payload: alarms });
    myAlarms.forEach(a => setAlarmsInEmitter(a));
    yield put({ type: actions.APP_NOT_LOADING });
    navigate();
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    alert(e.message);
    console.log('registerHandler error', e);
  }
}

function * loginHandler({ payload: { form, navigate } }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const { user, token } = yield call(api.login, form);
    yield AsyncStorage.setItem('token', token);
    yield put({ type: actions.SET_USER_DATA, payload: user });

    const promiseArr = [
      api.getMyAlarms(),
      api.getAlarms(),
      api.getMessages(),
    ];

    const [{ myAlarms }, { alarms }, { messages }] = yield Promise.all(promiseArr);

    myAlarms.forEach(a => setAlarmsInEmitter(a));
    yield put({ type: actions.SET_MY_ALARMS, payload: myAlarms });
    yield put({ type: actions.SET_ALARMS, payload: alarms });
    yield put({ type: actions.SET_MESSAGES, payload: messages });

    navigate();
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    yield put({ type: actions.APP_NOT_LOADING });
    alert(e.message);
    console.log('registerHandler error: ', e.message);
  }
}

function * isLoggedInHandler({ payload }) {
  try {
    const { user } = yield call(api.isLoggedIn);
    yield put({ type: actions.SET_USER_DATA, payload: user });

    let alarmMessage = null
    if (user.isPlaying) {
      const data = yield api.getAlarmMessage(user.isPlaying);
      alarmMessage = data.alarmMessage;
    }

    const promiseArr = [
      api.getMyAlarms(),
      api.getAlarms(),
      api.getMessages(),
    ];

    const [{ myAlarms }, { alarms }, { messages }] = yield Promise.all(promiseArr);

    myAlarms.forEach(a => setAlarmsInEmitter(a));
    yield put({ type: actions.SET_MY_ALARMS, payload: myAlarms });
    yield put({ type: actions.SET_ALARMS, payload: alarms });
    yield put({ type: actions.SET_MESSAGES, payload: messages });
    payload('MyAlarms');
    if (alarmMessage)
      yield put({ type: actions.SOUND_ALARM, payload: alarmMessage });
  } catch(e) {
    console.log('isLoggedInHandler error', e);
    payload('Landing');
  }
}
