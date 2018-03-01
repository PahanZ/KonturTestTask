import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './modules/Header';
import Cards from './modules/Cards';
import src from '../helpers/images';
import choiceImages from '../helpers/choiceImages';
import checkingRight from '../helpers/checkingRights';
import checkingWrong from '../helpers/checkingWrong';
import {
  setCardsList,
  setStatuses,
  setSelectedCard,
  setStatus,
  clearSelectedCard,
  setRight,
  setWrong,
  resetScores } from '../redux/actions';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  onSelect(number, id) {
    this.props.setSelectedCard({ number, id });
    this.setShowStatus(number);

    if (this.props.selectedCards.length === 1) {
      const selectedCardsFirstIndex = this.props.selectedCards[0];

      if (selectedCardsFirstIndex.id === id && selectedCardsFirstIndex.number !== number) {
        this.props.setRight(checkingWrong(this.props.statuses));
        setTimeout(() => {
          this.setStatuses(selectedCardsFirstIndex.number, number, 'checked');
        }, 1000);
      } else {
        this.props.setWrong(checkingRight(this.props.statuses));
        setTimeout(() => {
          this.setStatuses(selectedCardsFirstIndex.number, number, 'hide');
        }, 1000);
      }
      setTimeout(() => {
        this.props.clearSelectedCard([]);
      }, 1000);
    }
  }
  setShowStatus(index) {
    const newStatuses = this.props.statuses;
    newStatuses[index] = 'show';
    this.props.setStatus(newStatuses);
  }
  setStatuses(firstCard, secondCard, className) {
    const newStatuses = this.props.statuses;
    newStatuses[firstCard] = className;
    newStatuses[secondCard] = className;
    this.props.setStatus(newStatuses);
  }
  getData() {
    this.props.resetScores(0);
    this.props.setCardsList(choiceImages(src));
    this.changeData(this.props.setStatuses, 'default');
    setTimeout(() => {
      this.changeData(this.props.setStatuses, 'hide');
    }, 5000);
  }
  changeData(method, className) {
    const cardsListLength = this.props.cardsList.length;
    const newStatuses = Array(cardsListLength).fill(className);
    method(newStatuses);
  }
  render() {
    // console.log(this.props);
    return (
      <div className="page">
        <Header
          score={this.props.scores}
          reset={this.getData}
        />
        <section className="cards" data-tid="Deck">
          <Cards
            cardsList={this.props.cardsList}
            selectedCards={this.props.selectedCards}
            statuses={this.props.statuses}
            onSelect={this.onSelect}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cardsList: state.cards,
  scores: state.scores,
  statuses: state.statuses,
  selectedCards: state.selectedCards,
});

const mapDispatchToProps = {
  setCardsList,
  setStatuses,
  setSelectedCard,
  setStatus,
  clearSelectedCard,
  setRight,
  setWrong,
  resetScores,
};

Page2.propTypes = {
  setSelectedCard: PropTypes.func.isRequired,
  setRight: PropTypes.func.isRequired,
  setWrong: PropTypes.func.isRequired,
  clearSelectedCard: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  resetScores: PropTypes.func.isRequired,
  setCardsList: PropTypes.func.isRequired,
  setStatuses: PropTypes.func.isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
  scores: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
