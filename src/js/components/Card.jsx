import React from 'react';

const back = require('../../img/back.jpg');

export default (props) => {
  // console.log(props);
  return (
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
      />
      <img src={back} className={'cardBack' + ' ' + props.back} alt="back" />
      {/* eslint-enable */}
    </div>
  );
};

