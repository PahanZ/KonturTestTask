import React from 'react';
import { connect } from 'react-redux';
import src from '../helpers/images';
import random from '../helpers/random';
import choiceImages from '../helpers/choiceImages';
// import checkingRight from '../helpers/checkingRights';
// import checkingWrong from '../helpers/checkingWrong';
import {
  setRight,
  setWrong,
  setCardsList,
  setStatuses,
  setStatusTrue,
  setStatusFalse,
  setSelectedCard,
  clearSelectedCard } from '../redux/actions';
import Card from './Card';

const back = require('../../img/back.jpg');

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.showHide = this.showHide.bind(this);
  }
  componentDidMount() {
    this.props.setCardsList(choiceImages(src));
    this.props.setStatuses(choiceImages(src).map((element) => {
      let el = element;
      el = null;
      return el;
    }));
  }
  shouldComponentUpdate(nextState, nextProps) {
    if (nextState.count !== this.state.count
    || nextProps.selectedCards !== this.props.selectedCards) { // !!!incorrect
      return false;
    }
    return true;
  }
  showHide() {
    this.setState({ count: this.state.count += 1 });
    if (this.state.count === 1) {
      const newStatuses = this.props.statuses.slice();
      setTimeout(() => {
        newStatuses[this.props.selectedCards[0]] = 'show';
        this.props.setStatusTrue(newStatuses);
      }, 1);
    }

    if (this.state.count === 2) {
      setTimeout(() => {
        if (this.props.selectedCards[0] === this.props.selectedCards[1]) {
          console.log('yes');
        }
      }, 1);
      this.props.clearSelectedCard();
      this.setState({ count: 0 });
    }


    // if (this.state.count === 1) {
    //   this.props.setFirstCard(e.currentTarget);
    // }
    // if (this.state.count === 2) {
    //   this.props.setSecondCard(e.currentTarget);
    //   setTimeout(() => {
    //     if (this.props.firstCard.src === this.props.secondCard.src &&
    //       this.props.firstCard !== this.props.secondCard) {
    //       const promiseRight = new Promise((resolve) => {
    //         setTimeout(() => {
    //           this.props.firstCard.parentNode.classList.add('checked');
    //           this.props.secondCard.parentNode.classList.add('checked');
    //           resolve(checkingWrong());
    //         }, 1000);
    //       });
    //       promiseRight
    //         .then((result) => {
    //           this.props.setRight(result * 42);
    //         });
    //     } else {
    //       const promiseWrong = new Promise((resolve) => {
    //         setTimeout(() => {
    //           cleaning(document.getElementsByClassName('card'), '0');
    //           resolve(checkingRight());
    //         }, 1000);
    //       });
    //       promiseWrong
    //         .then((result) => {
    //           this.props.setWrong(result * 42);
    //         });
    //     }
    //   }, 1);
    //   this.setState({ count: 0 });
    // }
  }
  render() {
    console.log(this.props);
    let images = this.props.cardsList.map((element, i) => (
      <Card
        key={String(i)}
        id={i}
        status={this.props.statuses[i]}
        src={element}
        back={back}
        showHide={this.showHide}
        setSelectedCard={this.props.setSelectedCard}
      />
    ));
    images.length = 9;
    images = [images, ...images];
    images.sort(random);
    return images;
  }
}

const mapStateToProps = state => ({
  cardsList: state.cards,
  statuses: state.statuses,
  selectedCards: state.selectedCards,
});

const mapDispatchToProps = {
  setRight,
  setWrong,
  setCardsList,
  setStatuses,
  setStatusTrue,
  setStatusFalse,
  setSelectedCard,
  clearSelectedCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
