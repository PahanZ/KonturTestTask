import { setRight, setWrong, resetScores } from '../types';

export default (state = 0, action) => {
  switch (action.type) {
    case setRight:
      return state + action.payload;
    case setWrong:
      return state - action.payload;
    case resetScores:
      return action.payload;
    default:
      return state;
  }
};
