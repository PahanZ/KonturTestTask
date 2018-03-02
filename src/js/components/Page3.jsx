import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkFoRouter } from '../redux/actions';

const img = require('../../img/Group 2.png');

const Page3 = props => (
  <div className="page">
    <img src={img} className="titleImg" alt="StartGame" />
    <h1>Поздравляем!</h1>
    <h2>Ваш итоговый счет: {props.scores}</h2>
    <Link
      to="/"
      className="link"
      onClick={() => {
        props.checkFoRouter(false);
      }}
      data-tid="EndGame-retryGame"
    >Еще раз
    </Link>
  </div>
);

const mapStateToProps = state => ({
  scores: state.scores,
  check: state.checkFoRouter,
});

const mapDispatchToProps = {
  checkFoRouter,
};

Page3.propTypes = {
  scores: PropTypes.number.isRequired,
  checkFoRouter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
