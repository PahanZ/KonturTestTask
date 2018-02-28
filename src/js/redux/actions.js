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

const setStatus = data => ({
  type: 'setStatus',
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

const setBack = data => ({
  type: 'setBack',
  payload: data,
});

const resetScores = data => ({
  type: 'resetScores',
  payload: data,
});

export { setRight,
  setWrong,
  setCardsList,
  setStatuses,
  setStatus,
  setSelectedCard,
  clearSelectedCard,
  setBack,
  resetScores,
};
