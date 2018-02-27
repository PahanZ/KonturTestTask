import React from 'react';

const back = require('../../../img/back.jpg');

export default props => (
  <div className="wrapFoCard">
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
    <img src={back} className={'cardBack' + ' ' + props.back} alt="back" data-tid="Card-flipped"/>
      {/* eslint-enable */}
  </div>
);

