import React from 'react';

export default props => (
  <div className="wrapFoCard">
    {/* eslint-disable */}
        <img
            src={props.src}
            className="card"
            alt="card"
            onClick={props.showHide}
        />
        {/* eslint-enable */}
    <img src={props.back} className="cardBack" alt="back" />
  </div>
);
