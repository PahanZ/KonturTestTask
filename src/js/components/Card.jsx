import React from 'react';

export default (props) => {
  // console.log(props);
  return (
    <div className="wrapFoCard">
      {/* eslint-disable */}
        <img
            id={props.id}
            src={props.src}
            className={'card' + ' ' + props.status}
            alt="card"
            onClick={(event) => {
              props.setSelectedCard(Number(event.currentTarget.id));
              props.showHide();
            }}
        />
        {/* eslint-enable */}
      <img src={props.back} className="cardBack" alt="back" />
    </div>
  );
};
