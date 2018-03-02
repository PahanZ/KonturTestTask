import React from 'react';
import PropTypes from 'prop-types';

const back = require('../../../img/back.jpg');

const Card = (props) => {
  const paths = () => (props.status === 'show' || props.status === 'default' || props.status === undefined ? props.src : back);
  const classes = () => (props.status === 'checked' ? 'card checked' : 'card');
  return (
    <div className="wrapFoCard">
      {/* eslint-disable */}
      <img
        index={props.index}
        id={props.id}
        src={paths()}
        className={classes()}
        alt="card"
        onClick={() => {            
          props.onSelect(props.index, props.id);
        }}
      data-tid="Card"
      data-tid="Card-flipped"
      />
      {/* eslint-enable */}
    </div>
  );
};

Card.defaultProps = {
  status: undefined,
};

Card.propTypes = {
  status: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default Card;
