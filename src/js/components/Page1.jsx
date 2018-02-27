import React from 'react';
import { Link } from 'react-router-dom';

const img = require('../../img/StartGame.png');

export default () => (
  <div className="page">
    <img src={img} className="titleImg" alt="StartGame" />
    <h1>Memory Game</h1>
    <Link to="/Page2" className="link" data-tid="NewGame-startGame">Начать игру</Link>
  </div>
);
