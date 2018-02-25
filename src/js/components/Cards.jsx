import React from 'react';
import Card from './Card';

export default class Cards extends React.Component {
  render() {
    // console.log(this.props);
    return this.props.cardsList.map((element, i) => (
      <Card
        key={String(i)}
        index={i}
        id={element.index}
        status={this.props.statuses[i]}
        src={element.src}
        onSelect={this.props.onSelect}
        back={this.props.back[i]}
      />
    ));
  }
}
