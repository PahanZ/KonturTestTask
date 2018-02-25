import React from 'react';

export default props => (
  <section className="section_head">
    <button
      className="reset"
      onClick={() => {
              props.reset();
          }}
    >Начать заново
    </button>
    <p>Очки: {props.score}</p>
  </section>
);
