import random from './random';

export default (src) => {
  let imgs = src;
  imgs.sort(random);
  imgs.length = 9;
  imgs = [...imgs, ...imgs];
  return imgs.sort(random);
};
