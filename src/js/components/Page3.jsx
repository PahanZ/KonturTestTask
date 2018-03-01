import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStatuses } from '../redux/actions';

const img = require('../../img/Group 2.png');

const Page3 = (props) => {
  const reset = () => {
    const [cardsList] = props.cardsList;
    const newStatuses = Array(cardsList).fill('default');
    props.setStatuses(newStatuses);
  };
  return (
    <div className="page">
      <img src={img} className="titleImg" alt="StartGame" />
      <h1>Поздравляем!</h1>
      <h2>Ваш итоговый счет: {props.scores}</h2>
      <Link
        to="/"
        className="link"
        onClick={() => {
          reset();
        }}
        data-tid="EndGame-retryGame"
      >Еще раз
      </Link>
    </div>
  );
};

const mapStateToProps = state => ({
  scores: state.scores,
  statuses: state.statuses,
});

const mapDispatchToProps = {
  setStatuses,
};

Page3.propTypes = {
  setStatuses: PropTypes.func.isRequired,
  scores: PropTypes.number.isRequired,
  cardsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page3);
