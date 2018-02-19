export default (state = '', action) => {
  if (action.type === 'setSecondCard') {
    return action.payload;
  }
  return state;
};
