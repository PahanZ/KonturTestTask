import React from 'react';
import src from '../helpers/images';
import cleaning from '../helpers/cleaning';
import checkingRight from '../helpers/checkingRights';
import checkingWrong from '../helpers/checkingWrong';

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
    const event = e;
    this.count += 1;
    event.currentTarget.style.opacity = '1';
    this.cards = [...this.cards, event.currentTarget];
    if (this.count === 2) {
      if (this.cards[0].src === this.cards[1].src && this.cards[0] !== this.cards[1]) {
        this.cards.forEach((element) => {
          const el = element;
          const promiseRight = new Promise((resolve) => {
            setTimeout(() => {
              el.parentNode.classList.add('checked');
              resolve();
            }, 1000);
          });
          promiseRight
            .then(() => checkingWrong())
            .then((result) => {
              this.props.setRight(result * 42);
            });
        });
      } else {
        const promiseWrong = new Promise((resolve) => {
          setTimeout(() => {
            cleaning(document.getElementsByClassName('card'), '0');
            resolve();
          }, 1000);
        });
        promiseWrong
          .then(() => checkingRight())
          .then((result) => {
            this.props.setWrong(result * 42);
          });
      }
      this.clear();
    }
  }
  render() {
    let images = src.map((element, i) => (
      <div className="wrapFoCard" key={String(i)}>
        {/*eslint-disable */}
        <img
          src={element}
          className="card"
          alt="card"
          onClick={this.showHide}
        />
        {/* eslint-enable */}
        <img src={back} className="cardBack" alt="back" />
      </div>
    ));
    images.sort(random);
    images.length = 9;
    images = [images, ...images];
    images.sort(random);
    return images;
  }
}

