import { setStatuses, setStatus } from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case setStatuses:
      return action.payload;
    case setStatus:
      return action.payload;
    default: return state;
  }
};
