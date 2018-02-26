import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Cards from './Cards';
import src from '../helpers/images';
import choiceImages from '../helpers/choiceImages';
import checkingRight from '../helpers/checkingRights';
import checkingWrong from '../helpers/checkingWrong';
import {
  setCardsList,
  setStatuses,
  setSelectedCard,
  setStatusTrue,
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
    this.props.setSelectedCard({ number, id });
    setTimeout(() => {
      if (this.props.selectedCards.length === 1) {
        this.setNewStatuses(0);
      }
      if (this.props.selectedCards.length === 2) {
        this.setNewStatuses(1);
        if (this.props.selectedCards[0].id === this.props.selectedCards[1].id
          && this.props.selectedCards[0].number !== this.props.selectedCards[1].number) {
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
    }, 1);
  }
  setNewStatuses(index) {
    const newStatuses = this.props.statuses.slice();
    newStatuses[this.props.selectedCards[index].number] = 'show';
    this.props.setStatusTrue(newStatuses);
  }
  setBackHide() {
    const newBack = this.props.back.slice();
    newBack[this.props.selectedCards[0].number] = 'hide';
    newBack[this.props.selectedCards[1].number] = 'hide';
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
    const newStatuses = Array(this.props.cardsList.length).fill(className);
    method(newStatuses);
  }
  render() {
    console.log(this.props);
    return (
      <div className="page">
        <Header
          score={this.props.scores}
          reset={this.getData}
        />
        <section className="cards">
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
  setStatusTrue,
  clearSelectedCard,
  setBack,
  setRight,
  setWrong,
  resetScores,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
