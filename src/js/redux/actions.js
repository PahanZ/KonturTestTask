const setRight = data => ({
  type: 'setRight',
  payload: data,
});

const setWrong = data => ({
  type: 'setWrong',
  payload: data,
});

const setCardsList = data => ({
  type: 'cards',
  payload: data,
});

const setStatuses = data => ({
  type: 'setStatuses',
  payload: data,
});

const setStatusTrue = data => ({
  type: 'setTrue',
  payload: data,
});

const setStatusFalse = data => ({
  type: 'setFalse',
  payload: data,
});

const setSelectedCard = data => ({
  type: 'selectedCard',
  payload: data,
});

const clearSelectedCard = data => ({
  type: 'clearSelectedCard',
  payload: data,
});

export { setRight,
  setWrong,
  setCardsList,
  setStatuses,
  setStatusTrue,
  setStatusFalse,
  setSelectedCard,
  clearSelectedCard,
};
