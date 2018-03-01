import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Cards extends React.Component {
  render() {
    return this.props.cardsList.map((element, i) => (
      <Card
        key={String(i)}
        index={i}
        id={element.index}
        status={this.props.statuses[i]}
        src={element.src}
        onSelect={this.props.onSelect}
      />
    ));
  }
}

Cards.propTypes = {
  cardsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
};
