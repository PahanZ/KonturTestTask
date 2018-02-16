import React from 'react';
import src from '../../images';

const random = () => Math.random() - 0.5;

export default () => {
  const images = src.map((element, i) => (
    <img key={String(i)} src={element} className="card" alt="card" />
  ));
  images.sort(random);
  images.length = 18;
  return images;
};

