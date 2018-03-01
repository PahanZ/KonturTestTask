import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
  const classes = () => {
    if (props.status === 'checked') {
      return 'wrapFoCard checked';
    }
    return 'wrapFoCard show';
  };
  return (
    <div className={classes()}>
      {/* eslint-disable */}
      <img
        index={props.index}
        id={props.id}
        src={props.src}
        className={'card' + ' ' + props.status}
        alt="card"
        onClick={() => {            
          props.onSelect(props.index, props.id);
        }}
      data-tid="Card"
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
};

export default Card;
