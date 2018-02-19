export default (state = '', action) => {
  if (action.type === 'setFirstCard') {
    return state + action.payload;
  }
  return state;
};
