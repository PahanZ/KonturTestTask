export default (state = '', action) => {
  if (action.type === 'setFirstCard') {
    return action.payload;
  }
  return state;
};
