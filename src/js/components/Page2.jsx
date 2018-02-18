import React from 'react';
import { connect } from 'react-redux';
import { setRight, setWrong } from '../redux/actions';
import Header from './Header';
import Card from './Card';
// import cleaning from '../helpers/cleaning';
// import checkingRights from '../helpers/checkingRights';

class Page2 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.count = 0;
  //   this.cards = [];
  //   this.showHide = this.showHide.bind(this);
  //   this.clear = this.clear.bind(this);
  // }
  // componentDidMount() {
  //   setTimeout(() => {
  //     cleaning(document.getElementsByClassName('card'), '0');
  //   }, 5000);
  // }
  // componentDidUpdate() {
  //   setTimeout(() => {
  //     cleaning(document.getElementsByClassName('card'), '0');
  //   }, 5000);
  // }
  // clear() {
  //   this.count = 0;
  //   this.cards = [];
  // }
  // showHide(e) {
  //   const event = e;
  //   this.count += 1;
  //   event.currentTarget.style.opacity = '1';
  //   this.cards = [...this.cards, event.currentTarget];
  //   if (this.count === 2) {
  //     if (this.cards[0].src === this.cards[1].src) {
  //       this.cards.forEach((element) => {
  //         const el = element;
  //         setTimeout(() => {
  //           el.parentNode.classList.add('checked');
  //           this.props.action();
  //         }, 1000);
  //       });
  //     } else {
  //       setTimeout(() => {
  //         cleaning(document.getElementsByClassName('card'), '0');
  //       }, 1000);
  //     }
  //     this.clear();
  //   }
  // }
  render() {
    console.log(this.props);
    return (
      <div className="page">
        <Header score={this.props.state} />
        <section className="cards">
          <Card
            showHide={this.showHide}
            setRight={this.props.setRight}
            setWrong={this.props.setWrong}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = {
  setRight,
  setWrong,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
