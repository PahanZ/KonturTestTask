import React from 'react';

const back = require('../../img/back.jpg');

class Card extends React.Component {
  shouldComponentUpdate() {
    return true;
  }
  render() {
    // console.log(this.props);
    return (
      <div className="wrapFoCard">
        {/* eslint-disable */}
        <img
          id={this.props.id}
          src={this.props.src}
          className={'card' + ' ' + this.props.status}
          alt="card"
          onClick={() => {            
            this.props.onSelect(this.props.id);
          }}
        />
        {/* eslint-enable */}
        <img src={back} className="cardBack" alt="back" />
      </div>
    );
  }
}

export default Card;
