import React from 'react';
import { Link } from 'react-router-dom';

const img = require('../../img/Group 2.png');

export default () => (
  <div className="page">
    <img src={img} className="titleImg" alt="StartGame" />
    <h1>Поздравляем!</h1>
    <h2>Ваш итоговый счет: ...</h2>
    <Link to="/" className="link">Еще раз</Link>
  </div>
);
