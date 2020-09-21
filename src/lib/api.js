import { AsyncStorage } from 'react-native';
import axios from 'axios';
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

export async function toggleActive(alarmId) {
  const res = await fetch(`${URI}/alarm/toggleactive/${alarmId}`, {
    method: 'PATCH',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function deleteAlarm(alarmId) {
  const res = await fetch(`${URI}/alarm/${alarmId}`, {
    method: 'DELETE',
    headers: {
      'authorization': await getToken(),
    },
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

export async function stopAlarm() {
  const res = await fetch(`${URI}/alarmmessage/stop`, {
    method: 'PATCH',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function createAlarmMessage(body) {
  const res = await fetch(`${URI}/alarmmessage/create`, {
    method: 'POST',
    headers: {
      'authorization': await getToken(),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
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

export async function getAlarms() {
  const res = await fetch(`${URI}/alarms`, {
    method: 'GET',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getSongs(term) {
  const uri = term
    ? `${URI}/songs/${term}`
    : `${URI}/songs/undefined`;
  
  const res = await fetch(uri, {
    method: 'GET',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}

export async function getMessages() {
  const res = await fetch(`${URI}/messages`, {
    method: 'GET',
    headers: {
      'authorization': await getToken(),
    },
  });
  const response = await res.json();
  errorThrower(res, response);
  return response.data;
}
