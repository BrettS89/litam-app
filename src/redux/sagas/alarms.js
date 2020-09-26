import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';
import eventEmitter from '../../utils/EventEmitter';
import { myAlarmsState } from '../selectors';
import setAlarmsInEmitter from '../../utils/setAlarmsInEmitter';
import alert from '../../utils/alert';

export default [
  addAlarmWatcher,
  toggleActiveWatcher,
  removeAlarmFromStateWatcher,
  deleteAlarmWatcher,
];

function * addAlarmWatcher() {
  yield takeLatest(actions.ADD_ALARM, addAlarmHandler);
}

function * toggleActiveWatcher() {
  yield takeLatest(actions.TOGGLE_ACTIVE, toggleActiveHandler);
}

function * removeAlarmFromStateWatcher() {
  yield takeLatest(actions.REMOVE_ALARM_FROM_STATE, removeAlarmFromStateHandler);
}

function * deleteAlarmWatcher() {
  yield takeLatest(actions.DELETE_ALARM, deleteAlarmHandler);
}

function * addAlarmHandler({ payload: { alarm, navigate } }) {
  try {
    const body = {
      displayTime: alarm.displayTime,
      time: alarm.time,
      day: alarm.day,
      days: alarm.days,
      amPm: alarm.amPm,
      isPublic: alarm.isPublic,
      defaultSong: alarm.defaultSong,
    };

    const data = yield call(api.addAlarm, body);
    const a = data.alarm;

    const alarmForEventEmitter = {
      _id: a._id,
      days: a.days,
      day: a.day,
      time: alarm.time,
      active: true,
      displayTime: alarm.displayTime,
      amPm: alarm.amPm,
      rang: [],
    }
    let alarms = yield AsyncStorage.getItem('alarms');
    if (alarms) alarms = JSON.parse(alarms);
    const alarmsClone = alarms || [];
    alarmsClone.push(alarmForEventEmitter);
    yield AsyncStorage.setItem('alarms', JSON.stringify(alarmsClone));
    eventEmitter.on(alarm.time, alarmForEventEmitter);
    const alarmsReduxState = yield select(myAlarmsState);
    const alarmsStateClone = _.cloneDeep(alarmsReduxState);
    alarmsStateClone.push(alarmForEventEmitter);
    yield put({ type: actions.SET_MY_ALARMS, payload: alarmsStateClone });
    navigate();
  } catch(e) {
    console.log('addAlarmHandler error', e);
  }
}

function * toggleActiveHandler({ payload }) {
  try {
    const myAlarmsReduxState = yield select(myAlarmsState);
    const myAlarmsStateClone = _.cloneDeep(myAlarmsReduxState);
    const { alarm } = yield call(api.toggleActive, payload);
    const updatedMyAlarmsState = myAlarmsStateClone.map(a => {
      if (a._id === alarm._id) return alarm;
      return a;
    });
    yield put({ type: actions.SET_MY_ALARMS, payload: updatedMyAlarmsState });
    eventEmitter.clear();
    updatedMyAlarmsState.forEach(a => setAlarmsInEmitter(a));
  } catch(e) {
    console.log('toggleActiveHandler error', e);
  }
}

function * removeAlarmFromStateHandler({ payload }) {
  try {
    const myAlarmsReduxState = yield select(myAlarmsState);
    const myAlarmsStateClone = _.cloneDeep(myAlarmsReduxState);
    const filteredMyAlarmsStateClone = myAlarmsStateClone.filter(a => a._id !== payload);
    yield put({ type: actions.SET_MY_ALARMS, payload: filteredMyAlarmsStateClone });
    eventEmitter.clear();
    filteredMyAlarmsStateClone.forEach(a => setAlarmsInEmitter(a));
  } catch(e) {
    console.log('removeAlarmFromStateHandler error', e);
  }
}

function * deleteAlarmHandler({ payload }) {
  try {
    console.log(payload);
    const { alarmId } = yield call(api.deleteAlarm, payload);
    const myAlarmsReduxState = yield select(myAlarmsState);
    const myAlarmsStateClone = _.cloneDeep(myAlarmsReduxState);
    const filteredMyAlarmsStateClone = myAlarmsStateClone.filter(a => a._id !== alarmId);
    yield put({ type: actions.SET_MY_ALARMS, payload: filteredMyAlarmsStateClone });
    eventEmitter.clear();
    filteredMyAlarmsStateClone.forEach(a => setAlarmsInEmitter(a));
  } catch(e) {
    alert('Error', e.message);
    console.log('deleteAlarmHandler error', e);
  }
}
