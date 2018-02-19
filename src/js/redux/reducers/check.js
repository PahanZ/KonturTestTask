export default (state = 0, action) => {
  if (action.type === 'setRight') {
    return state + action.payload;
  }
  if (action.type === 'setWrong') {
    return state - action.payload;
  }
  return state;
};
