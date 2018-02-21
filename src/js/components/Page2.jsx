import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Cards from './Cards';
import src from '../helpers/images';
import choiceImages from '../helpers/choiceImages';
// import checkingRight from '../helpers/checkingRights';
// import checkingWrong from '../helpers/checkingWrong';
import { setCardsList, setStatuses, setSelectedCard, setStatusTrue, clearSelectedCard } from '../redux/actions';

class Page2 extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }
  componentDidMount() {
    const setDefaultStatuses = new Promise((resolve) => {
      this.props.setCardsList(choiceImages(src));
      resolve();
    });
    setDefaultStatuses.then(() => {
      this.changeClass('default');
    });
    setTimeout(() => {
      this.changeClass('hide');
    }, 5000);
  }
  onSelect(id) {
    this.props.setSelectedCard(id);
    setTimeout(() => {
      if (this.props.selectedCards.length === 1) {
        this.setNewStatuses(0);
      }
      if (this.props.selectedCards.length === 2) {
        const promise = new Promise((resolve) => {
          this.setNewStatuses(1);
          resolve();
        });
        promise.then(() => {
          this.props.clearSelectedCard();
        });
      }
    }, 1);
  }
  setNewStatuses(index) {
    const newStatuses = this.props.statuses.slice();
    newStatuses[this.props.selectedCards[index]] = 'show';
    this.props.setStatusTrue(newStatuses);
  }
  changeClass(className) {
    this.props.setStatuses(this.props.cardsList.map((element) => {
      let el = element;
      el = className;
      return el;
    }));
  }
  render() {
    // console.log(this.props);
    return (
      <div className="page">
        <Header score={this.props.scores} />
        <section className="cards">
          <Cards
            cardsList={this.props.cardsList}
            statuses={this.props.statuses}
            onSelect={this.onSelect}
            // setRight={this.props.setRight}
            // setWrong={this.props.setWrong}
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
});

const mapDispatchToProps = {
  setCardsList,
  setStatuses,
  setSelectedCard,
  setStatusTrue,
  clearSelectedCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Page2);
