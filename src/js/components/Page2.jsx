import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './modules/Header';
import Cards from './modules/Cards';
import src from '../helpers/images';
import choiceImages from '../helpers/choiceImages';
import checkingStatuses from '../helpers/checkingStatuses';
import {
  setCardsList,
  setStatuses,
  setSelectedCard,
  setStatus,
  clearSelectedCard,
  setRight,
  setWrong,
  resetScores,
  checkFoRouter } from '../redux/actions';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  onSelect(number, id) {
    this.props.setSelectedCard({ number, id });
    this.setShowStatus(number);

    if (this.props.selectedCards.length === 1) {
      const selectedCardsFirst = this.props.selectedCards[0];
      this.restrictCardSelect('hide', 'hide disabled');
      if (selectedCardsFirst.id === id && selectedCardsFirst.number !== number) {
        this.scoring(this.props.setRight, 'hide', 'checked', selectedCardsFirst.number, number);
      } else {
        this.scoring(this.props.setWrong, 'show', 'hide', selectedCardsFirst.number, number);
      }
      setTimeout(() => {
        const conditionForRouter = this.props.statuses.every(element => (element === 'checked'));
        this.props.checkFoRouter(conditionForRouter);
        this.restrictCardSelect('hide disabled', 'hide');
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
  restrictCardSelect(gettingStatus, setingStatus) {
    const newStatuses = this.props.statuses.map(element => (
      element === gettingStatus ? setingStatus : element
    ));
    this.props.setStatus(newStatuses);
  }
  scoring(method, searchingClass, settingClass, element, number) {
    method(checkingStatuses(this.props.statuses, searchingClass));
    setTimeout(() => {
      this.setStatuses(element, number, settingClass);
    }, 1000);
  }
  changeData(method, className) {
    const cardsListLength = this.props.cardsList.length;
    const newStatuses = Array(cardsListLength).fill(className);
    method(newStatuses);
  }
  render() {
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
  check: state.checkFoRouter,
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
  checkFoRouter,
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
  checkFoRouter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
