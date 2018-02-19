import { combineReducers } from 'redux';
import check from './check';
import setFirstCard from './setFirstCard';
import setSecondCard from './setSecondCard';

export default combineReducers({
  check, setFirstCard, setSecondCard,
});
