import React from 'react';

export default props => (
  <section className="section_head">
    <button
      className="reset"
      onClick={() => {
              window.location.reload();
          }}
    >Начать заново
    </button>
    <p>Очки: {props.score}</p>
  </section>
);
