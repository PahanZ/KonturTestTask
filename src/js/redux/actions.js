const setRight = data => ({
  type: 'setRight',
  payload: data,
});

const setWrong = data => ({
  type: 'setWrong',
  payload: data,
});

export { setRight, setWrong };
