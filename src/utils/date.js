export const getIsoDate = () => {
  const date = new Date().toLocaleString().split(',')[0].split('/');
  return `${date[2]}-${date[0]}-${date[1]}`;
};

export const getCurrentTime = () => new Date().toTimeString().split(' ')[0];

// get day of week (Mon, Tues, Weds, etc)
export const getWeekday = () => {

};
