const setRight = data => ({
  type: 'setRight',
  payload: data,
});

const setWrong = data => ({
  type: 'setWrong',
  payload: data,
});

const setFirstCard = data => ({
  type: 'setFirstCard',
  payload: data,
});

const setSecondCard = data => ({
  type: 'setSecondCard',
  payload: data,
});

export { setRight, setWrong, setFirstCard, setSecondCard };
