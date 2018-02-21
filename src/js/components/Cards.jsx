import React from 'react';
import random from '../helpers/random';
import Card from './Card';

export default class Cards extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.cardsList !== this.props.cardsList;
  }
  render() {
    // console.log(this.props);
    let images = this.props.cardsList.map((element, i) => (
      <Card
        key={String(i)}
        id={i}
        status={this.props.statuses[i]}
        src={element}
        onSelect={this.props.onSelect}
      />
    ));
    images.length = 9;
    images = [images, ...images];
    images.sort(random);
    return images;
  }
}
