export default (state = [], action) => {
  if (action.type === 'selectedCard') {
    return [...state, action.payload];
  }
  if (action.type === 'clearSelectedCard') {
    return action.payload;
  }
  return state;
};
