import { checkFoRouter } from '../types';

export default (state = false, action) => {
  if (action.type === checkFoRouter) {
    return action.payload;
  }
  return state;
};
