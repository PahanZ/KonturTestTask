const score = 0;

export default (state = score, action) => {
  if (action.type === 'setRight') {
    return state + action.payload;
  }
  if (action.type === 'setWrong') {
    return state - action.payload;
  }
  return state;
};
