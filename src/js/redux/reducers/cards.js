import { cards } from '../types';

export default (state = [], action) => {
  if (action.type === cards) {
    return action.payload;
  }
  return state;
};
