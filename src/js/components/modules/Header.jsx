import React from 'react';
import PropTypes from 'prop-types';

const Header = props => (
  <section className="section_head">
    <button
      className="reset"
      onClick={() => {
              props.reset();
          }}
      data-tid="Menu-newGame"
    >Начать заново
    </button>
    <p data-tid="Menu-scores">Очки: {props.score}</p>
  </section>
);

Header.propTypes = {
  reset: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default Header;
