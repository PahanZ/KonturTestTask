export default (state = [], action) => {
  switch (action.type) {
    case 'setStatuses':
      return action.payload;
    case 'setTrue':
      return action.payload;
    case 'setFalse':
      return action.payload;
    default: return state;
  }
};
