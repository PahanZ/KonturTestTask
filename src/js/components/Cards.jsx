import React from 'react';
import src from '../helpers/images';
import cleaning from '../helpers/cleaning';
import checkingRight from '../helpers/checkingRights';
import checkingWrong from '../helpers/checkingWrong';
import Card from './Card';

const random = () => Math.random() - 0.5;
const back = require('../../img/back.jpg');

export default class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.cards = [];
    this.showHide = this.showHide.bind(this);
    this.clear = this.clear.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      cleaning(document.getElementsByClassName('card'), '0');
    }, 5000);
  }
  shouldComponentUpdate() {
    return false;
  }
  componentDidUpdate() {
    setTimeout(() => {
      cleaning(document.getElementsByClassName('card'), '0');
    }, 5000);
  }
  clear() {
    this.count = 0;
    this.cards = [];
  }
  showHide(e) {
    this.count += 1;
    e.currentTarget.style.opacity = '1';
    if (this.count === 1) {
      this.props.setFirstCard(e.currentTarget.src);
    }
    if (this.count === 2) {
      this.props.setSecondCard(e.currentTarget.src);
    }


    // this.cards = [...this.cards, e.currentTarget];
    // if (this.count === 2) {
    //   if (this.cards[0].src === this.cards[1].src && this.cards[0] !== this.cards[1]) {
    //     const promiseRight = new Promise((resolve) => {
    //       this.cards.forEach((element) => {
    //         setTimeout(() => {
    //           element.parentNode.classList.add('checked');
    //           resolve();
    //         }, 1000);
    //       });
    //     });
    //     promiseRight
    //       .then(() => {
    //         console.log(checkingWrong());// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //         return checkingWrong();
    //       })
    //       .then((result) => {
    //         this.props.setRight(result * 42);
    //       });
    //   } else {
    //     const promiseWrong = new Promise((resolve) => {
    //       setTimeout(() => {
    //         cleaning(document.getElementsByClassName('card'), '0');
    //         resolve();
    //       }, 1000);
    //     });
    //     promiseWrong
    //       .then(() => checkingRight())
    //       .then((result) => {
    //         this.props.setWrong(result * 42);
    //       });
    //   }
    // this.clear();
    // }
  }
  render() {
    let images = src.map((element, i) => (
      <Card key={String(i)} src={element} back={back} showHide={this.showHide} />
    ));
    images.sort(random);
    images.length = 9;
    images = [images, ...images];
    images.sort(random);
    return images;
  }
}

