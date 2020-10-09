import {
  call, put, takeLatest, select, fork,
} from 'redux-saga/effects';
import _ from 'lodash';
import * as actions from '../actions';
import * as api from '../../lib/api';

export default [
  getSongsWatcher,
];

function * getSongsWatcher() {
  yield takeLatest(actions.GET_SONGS, getSongsHandler);
}

function * getSongsHandler({ payload }) {
  try {
    yield put({ type: actions.APP_LOADING });
    const { songs } = yield call(api.getSongs, payload);
    yield put({ type: actions.SET_SONGS, payload: songs });
    yield put({ type: actions.APP_NOT_LOADING });
  } catch(e) {
    console.log('getSongsHandler error', e);
    yield put({ type: actions.APP_NOT_LOADING });
  }
}
