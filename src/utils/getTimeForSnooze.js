import { getCurrentTime } from './date';

export default () => {
  const time = getCurrentTime().split(':');
  let hr = Number(time[0]);
  let min = Number(time[1]) + 10;
  if (min > 59) {
    min = min - 60;
    hr++;
  }
  if (hr > 23) {
    hr = 0;
  }

  const hour = hr === 0 ? '0' : hr.toString();
  let minute = min === 0 ? '00' : min.toString();
  if (minute.length === 1) minute = `0${minute}`;
  
  return `${hour}:${minute}`;
};
