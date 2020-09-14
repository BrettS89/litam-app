import { AsyncStorage } from 'react-native';
import { URI } from '../config';
import errorThrower from '../utils/errorThrower';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  if (!token) throw new Error('no token');
  return token;
}

export async function isLoggedIn() {
  const res = await fetch(`${URI}/user/isloggedin`, {
    method: 'GET',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function login(body) {
  const res = await fetch(`${URI}/user/login`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function addAlarm(body) {
  const res = await fetch(`${URI}/alarm/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': await getToken(),
    },
    body: JSON.stringify(body),
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getAlarmMessage(alarmId) {
  const res = await fetch(`${URI}/alarmmessage/${alarmId}`, {
    method: 'GET',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getMyAlarms() {
  const res = await fetch(`${URI}/alarms/myalarms`, {
    method: 'GET',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}
