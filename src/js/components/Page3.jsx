import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const img = require('../../img/Group 2.png');

const Page3 = props => (
  <div className="page">
    <img src={img} className="titleImg" alt="StartGame" />
    <h1>Поздравляем!</h1>
    <h2>Ваш итоговый счет: {props.scores}</h2>
    <Link to="/" className="link">Еще раз</Link>
  </div>
);

const mapStateToProps = state => ({
  scores: state.scores,
});

export default connect(mapStateToProps)(Page3);
