import { setBack } from '../types';

export default (state = [], action) => {
  if (action.type === setBack) {
    return action.payload;
  }
  return state;
};