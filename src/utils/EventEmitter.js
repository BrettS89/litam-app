import _ from 'lodash';

class EventEmitter {
  constructor() {
    this.events = {
      '08 00': [
        {
          _id: '001',
          days: ['Mon', 'Tues', 'Weds', 'Thurs', 'Fri'],
          time: '08 00',
          displayTime: '8:00',
          ampm: 'AM',
        }
      ],
    }
  }

  on(time, obj) {
    this.events[time] = this.events[time]
      ? [...this.events[time], obj]
      : [obj];
  }

  emit(time) {
    let toDelete = [];
    const events = _.cloneDeep(this.events);
    const arr = events[time];
    const today = new Date().toString().split(' ')[0];
    arr.forEach(a => {
      if (a.days.includes(today) || !a.days.length) {
        if (!a.days.length) toDelete.push(a._id);
        // run logic
      }
    });
    const updatedAlarms = arr.filter(a => !toDelete.includes(a._id));
    events[time] = updatedAlarms;
    this.events = events;
  }
}

export default new EventEmitter;
