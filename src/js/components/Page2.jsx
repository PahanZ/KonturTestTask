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
  setBack,
  setRight,
  setWrong,
  resetScores } from '../redux/actions';

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
    const promise = new Promise((resolve) => {
      this.props.setSelectedCard({ number, id });
      resolve();
    });
    promise.then(() => {
      const [firstCard, secondCard] = this.props.selectedCards;

      if (this.props.selectedCards.length === 1) {
        this.setShowStatus(0);
      }

      if (this.props.selectedCards.length === 2) {
        this.setShowStatus(1);

        if (firstCard.id === secondCard.id && firstCard.number !== secondCard.number) {
          this.props.setRight(checkingWrong(this.props.statuses));
          this.setBackHide();
        } else {
          this.props.setWrong(checkingRight(this.props.statuses));
        }

        this.props.clearSelectedCard([]);

        setTimeout(() => {
          this.changeData(this.props.setStatuses, 'hide');
        }, 1000);
      }
    });
  }
  setShowStatus(index) {
    const newStatuses = this.props.statuses.slice();
    const statusIndex = this.props.selectedCards[index].number;
    newStatuses[statusIndex] = 'show';
    this.props.setStatus(newStatuses);
  }
  setBackHide() {
    const newBack = this.props.back.slice();
    const firstBackIndex = this.props.selectedCards[0].number;
    const secondBackIndex = this.props.selectedCards[1].number;
    newBack[firstBackIndex] = 'hide';
    newBack[secondBackIndex] = 'hide';
    this.props.setBack(newBack);
  }
  getData() {
    this.props.resetScores(0);
    this.props.setCardsList(choiceImages(src));
    this.changeData(this.props.setStatuses, 'default');
    setTimeout(() => {
      this.changeData(this.props.setBack, 'show');
      this.changeData(this.props.setStatuses, 'hide');
    }, 5000);
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
            back={this.props.back}
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
  back: state.setBack,
});

const mapDispatchToProps = {
  setCardsList,
  setStatuses,
  setSelectedCard,
  setStatus,
  clearSelectedCard,
  setBack,
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
  setBack: PropTypes.func.isRequired,
  resetScores: PropTypes.func.isRequired,
  setCardsList: PropTypes.func.isRequired,
  setStatuses: PropTypes.func.isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  statuses: PropTypes.arrayOf(PropTypes.string).isRequired,
  back: PropTypes.arrayOf(PropTypes.string).isRequired,
  scores: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
