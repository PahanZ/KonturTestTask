import React from 'react';
import { connect } from 'react-redux';
import { setRight, setWrong, setFirstCard, setSecondCard } from '../redux/actions';
import Header from './Header';
import Cards from './Cards';

class Page2 extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="page">
        <Header score={this.props.check} />
        <section className="cards">
          <Cards
            showHide={this.showHide}
            setRight={this.props.setRight}
            setWrong={this.props.setWrong}
            setFirstCard={this.props.setFirstCard}
            setSecondCard={this.props.setSecondCard}
          />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  check: state.check,
  firstCard: state.setFirstCard,
  secondCard: state.setSecondCard,
});

const mapDispatchToProps = {
  setRight,
  setWrong,
  setFirstCard,
  setSecondCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
