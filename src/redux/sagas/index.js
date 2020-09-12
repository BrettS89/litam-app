import { all, fork } from 'redux-saga/effects';
import userSagas from './users';
import alarmSagas from './alarms';

const forkList = sagasList => sagasList.map(saga => fork(saga));

export default function * root() {
  yield all([
    ...forkList(userSagas),
    ...forkList(alarmSagas),
  ]);
}
