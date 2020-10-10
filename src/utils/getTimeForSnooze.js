import { getCurrentTime } from './date';

export default () => {
  const time = getCurrentTime().split(':');
  return `${time[0]}:${time[1]}`;
};
