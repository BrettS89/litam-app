import { getCurrentTime } from './date';

export default (hour, minutes, days) => {
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timeToSet = `${hour}:${minutes}:00`;
  const todaysWeekday = new Date().toString().split(' ')[0];
  const currentTime = getCurrentTime();

  if (!days.length) {
    if (currentTime > timeToSet) {
      if (todaysWeekday === 'Sat') return 'Sun';
      const i = weekdays.indexOf(todaysWeekday);
      return weekdays[i + 1];
    }
    return todaysWeekday;
  }

  const idx = weekdays.indexOf(todaysWeekday);
  let weekday = null;

  // today Sat
  // next index Mon
  if (!days.includes(todaysWeekday)) {
    for (let i = idx; idx < days.length; i++) {
      if (days.includes(weekdays[i])) return weekdays[i];
    }
    for (let i = 0; i < weekdays.length; i++) {
      if (days.includes(weekdays[i])) return weekdays[i];
    }
  }

  if (currentTime > timeToSet) {
    if (todaysWeekday === 'Sat' && days.includes('Sun')) return 'Sun';
    const i = weekdays.indexOf(todaysWeekday);
    return weekdays[i + 1];
  }
  return todaysWeekday;
};
