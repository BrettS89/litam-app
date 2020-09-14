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
  getAlarmMessageWatcher,
];

function * getAlarmMessageWatcher() {
  yield takeLatest(actions.TRIGGER_ALARM, getAlarmMessageHandler);
}


function * getAlarmMessageHandler({ payload }) {
  try {
    console.log('INNNNNN ROMG ROMG ROMG');
    const { alarmMessage } = yield call(api.getAlarmMessage, payload);
    console.log(alarmMessage);
  } catch(e) {
    console.log('addAlarmHandler error', e);
  }
}
