import random from './random';

export default (src) => {
  const imgs = src.sort(random);
  imgs.length = 9;
  let arr = imgs.map((element, i) => (
    {
      index: i,
      src: element,
    }
  ));
  arr = [...arr, ...arr];
  arr.sort(random);
  return arr;
};
