import { combineReducers } from 'redux';
import scores from './scores';
import cards from './cards';
import statuses from './statuses';
import selectedCards from './selectedCards';
import checkFoRouter from './checkFoRouter';

export default combineReducers({
  scores, cards, statuses, selectedCards, checkFoRouter,
});
