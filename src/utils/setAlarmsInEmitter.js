import eventEmitter from './EventEmitter';

export default (alarm) => {
  const a = {
    ...alarm,
    rang: [],
  };
  eventEmitter.on(a.time, a);
}
