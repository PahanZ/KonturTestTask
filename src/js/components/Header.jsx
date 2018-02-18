import React from 'react';
import cleaning from '../helpers/cleaning';

export default props => (
  <section className="section_head">
    <button
      className="reset"
      onClick={() => {
                cleaning(document.getElementsByClassName('wrapFoCard'), '1');
                cleaning(document.getElementsByClassName('card'), '1');
                // this.forceUpdate();
            }}
    >Начать заново
    </button>
    <p>Очки: {props.score}</p>
  </section>
);
