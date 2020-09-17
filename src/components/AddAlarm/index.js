import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import View from './view';
import getDay from '../../utils/getDay';
import { ADD_ALARM } from '../../redux/actions';

const AddAlarm = props => {
  const dispatch = useDispatch();
  const [hour, setHour] = useState('8');
  const [minutes, setMinutes] = useState('00');
  const [ampm, setAmpm] = useState('AM');
  const [days, setDays] = useState([
    { day: 'Sunday', repeat: false, abrev: 'Sun' },
    { day: 'Monday', repeat: false, abrev: 'Mon' },
    { day: 'Tuesday', repeat: false, abrev: 'Tue' },
    { day: 'Wednesday', repeat: false, abrev: 'Wed' },
    { day: 'Thursday', repeat: false, abrev: 'Thu' },
    { day: 'Friday', repeat: false, abrev: 'Fri' },
    { day: 'Saturday', repeat: false, abrev: 'Sat' },
  ]);

  function setRepeat(day) {
    const daysClone = _.cloneDeep(days);
    const newDays = daysClone.map(d => {
      return day === d.day
        ? { day: d.day, repeat: !d.repeat, abrev: d.abrev }
        : d;
    });
    setDays(newDays);
  }

  function addAlarm() {
    const repeatDays = days.map(d => {
      if (d.repeat) return d.abrev;
    }).filter(d => !!d);
    const displayTime = `${hour}:${minutes}`;
    const displayAmPm = ampm;
    let hourTime = ampm === 'PM' ? `${Number(hour) + 12}` : hour;
    if (hourTime.length === 1) hourTime = `0${hourTime}`;
    const alarm = {
      displayTime,
      time: `${hourTime}:${minutes}`,
      amPm: ampm,
      days: repeatDays,
      day: getDay(hourTime, minutes, repeatDays),
    }

    dispatch({ type: ADD_ALARM, payload: { alarm, navigate } });
  }

  function navigate() {
    props.navigation.navigate('MyAlarms');
  }

  return (
    <View
      setHour={setHour}
      setMinutes={setMinutes}
      ampm={ampm}
      setAmpm={setAmpm}
      days={days}
      setRepeat={setRepeat}
      addAlarm={addAlarm}
    />
  );
};

export default AddAlarm;
