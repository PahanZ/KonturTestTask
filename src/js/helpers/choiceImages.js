import random from './random';

export default (src) => {
  const imgs = src;
  imgs.sort(random);
  imgs.length = 18;
  return imgs;
};
