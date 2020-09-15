import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';
import eventEmitter from '../../utils/EventEmitter';
import { songsState, alarmsState } from '../selectors';
import alert from '../../utils/alert';

export default [
  submitAlarmMessageWatcher,
];

function * submitAlarmMessageWatcher() {
  yield takeLatest(actions.SUBMIT_ALARM_MESSAGE, submitAlarmMessageHandler);
}

function * submitAlarmMessageHandler({ payload: { message, navigate } }) {
  try {
    const { songId, alarmId } = yield select(songsState);
    const alarmsData = yield select(alarmsState);

    const alarmsStateClone = _.cloneDeep(alarmsData);

    if (!songId || !alarmId) throw new Error('Something went wrong :( please try again');

    const body = {
      song: songId,
      alarmId: alarmId,
      message: message || null,
    };

    const { updateAlarm: { alarm, userName} } = yield call(api.createAlarmMessage, body);

    const updatedAlarmsState = alarmsStateClone.map(a => {
      if (a._id === alarm) {
        return {
          ...a,
          userWhoSetMessage: userName,
        };
      }
      return a;
    });

    yield put({ type: actions.SET_ALARMS, payload: updatedAlarmsState });

    navigate();
  } catch(e) {
    alert('Error', e.message);
    console.log('submitAlarmMessageHandler error', e);
  }
}
