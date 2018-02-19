export default (state = '', action) => {
  if (action.type === 'setSecondCard') {
    return state + action.payload;
  }
  return state;
};
