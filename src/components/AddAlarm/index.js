import React, { useState } from 'react';
import _ from 'lodash';
import View from './view';

const AddAlarm = props => {
  const [hour, setHour] = useState('8');
  const [minutes, setMinutes] = useState('00');
  const [ampm, setAmpm] = useState('AM');
  const [days, setDays] = useState([
    { day: 'Sunday', repeat: false },
    { day: 'Monday', repeat: false },
    { day: 'Tuesday', repeat: false },
    { day: 'Wednesday', repeat: false },
    { day: 'Thursday', repeat: false },
    { day: 'Friday', repeat: false },
    { day: 'Saturday', repeat: false },
  ]);

  function setRepeat(day) {
    const daysClone = _.cloneDeep(days);
    const newDays = daysClone.map(d => {
      return day === d.day
        ? { day: d.day, repeat: !d.repeat }
        : d;
    });
    setDays(newDays);
  }

  function addAlarm() {
    
  }

  return (
    <View
      setHour={setHour}
      setMinutes={setMinutes}
      ampm={ampm}
      setAmpm={setAmpm}
      days={days}
      setRepeat={setRepeat}
    />
  );
};

export default AddAlarm;
