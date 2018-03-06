import { selectedCard, clearSelectedCard } from '../types';

export default (state = [], action) => {
  switch (action.type) {
    case selectedCard:
      return [...state, action.payload];
    case clearSelectedCard:
      return action.payload;
    default: return state;
  }
};
