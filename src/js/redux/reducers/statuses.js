export default (state = [], action) => {
  switch (action.type) {
    case 'setStatuses':
      return action.payload;
    case 'setTrue':
      return [...state, action.payload];
    case 'setFalse':
      return action.payload;
    default: return state;
  }
};
