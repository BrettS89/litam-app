import { AsyncStorage } from 'react-native';
import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';
import eventEmitter from '../../utils/EventEmitter';
import { alarmsState } from '../selectors';

export default [
  addAlarmWatcher,
];

function * addAlarmWatcher() {
  yield takeLatest(actions.ADD_ALARM, addAlarmHandler);
}

function * addAlarmHandler({ payload: { alarm, navigate } }) {
  try {
    const body = {
      time: alarm.displayTime,
      day: alarm.day,
      days: alarm.days,
      amPm: alarm.amPm,
    }
    const data = yield call(api.addAlarm, body);
    const a = data.alarm;

    const alarmForEventEmitter = {
      _id: a._id,
      days: a.days,
      day: a.day,
      time: alarm.time,
      displayTime: alarm.displayTime,
      amPm: alarm.amPm,
    }
    let alarms = yield AsyncStorage.getItem('alarms');
    if (alarms) alarms = JSON.parse(alarms);
    const alarmsClone = alarms || [];
    alarmsClone.push(alarmForEventEmitter);
    yield AsyncStorage.setItem('alarms', JSON.stringify(alarmsClone));
    eventEmitter.on(alarm.time, alarmForEventEmitter);
    const alarmsReduxState = yield select(alarmsState);
    const alarmsStateClone = _.cloneDeep(alarmsReduxState);
    alarmsStateClone.push(alarmForEventEmitter);
    yield put({ type: actions.SET_ALARM, payload: alarmsStateClone });
    navigate();
  } catch(e) {
    console.log('addAlarmHandler error', e);
  }
}
