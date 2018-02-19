import React from 'react';
import { connect } from 'react-redux';
import src from '../helpers/images';
import cleaning from '../helpers/cleaning';
import { setRight, setWrong, setFirstCard, setSecondCard } from '../redux/actions';
import checkingRight from '../helpers/checkingRights';
import checkingWrong from '../helpers/checkingWrong';
import Card from './Card';

const random = () => Math.random() - 0.5;
const back = require('../../img/back.jpg');

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.showHide = this.showHide.bind(this);
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
  showHide(e) {
    this.setState({ count: this.state.count += 1 });
    e.currentTarget.style.opacity = '1';
    if (this.state.count === 1) {
      this.props.setFirstCard(e.currentTarget);
    }
    if (this.state.count === 2) {
      this.props.setSecondCard(e.currentTarget);
      setTimeout(() => {
        if (this.props.firstCard.src === this.props.secondCard.src &&
          this.props.firstCard !== this.props.secondCard) {
          const promiseRight = new Promise((resolve) => {
            setTimeout(() => {
              this.props.firstCard.parentNode.classList.add('checked');
              this.props.secondCard.parentNode.classList.add('checked');
              resolve(checkingWrong());
            }, 1000);
          });
          promiseRight
            .then((result) => {
              this.props.setRight(result * 42);
            });
        } else {
          const promiseWrong = new Promise((resolve) => {
            setTimeout(() => {
              cleaning(document.getElementsByClassName('card'), '0');
              resolve(checkingRight());
            }, 1000);
          });
          promiseWrong
            .then((result) => {
              this.props.setWrong(result * 42);
            });
        }
      }, 1);
      this.setState({ count: 0 });
    }
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

const mapStateToProps = state => ({
  firstCard: state.setFirstCard,
  secondCard: state.setSecondCard,
});

const mapDispatchToProps = {
  setRight,
  setWrong,
  setFirstCard,
  setSecondCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
