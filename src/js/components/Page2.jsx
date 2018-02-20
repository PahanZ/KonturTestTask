import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Cards from './Cards';

class Page2 extends React.Component {
  render() {
    // console.log(this.props);
    return (
      <div className="page">
        <Header score={this.props.scores} />
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
  scores: state.scores,
});

export default connect(mapStateToProps)(Page2);
