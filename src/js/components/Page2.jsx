import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

export default () => (
  <div className="page">
    <section className="section_head">
      <Link to="/Page2" className="reset">Начать заново</Link>
      <p>Очки: ...</p>
    </section>
    <section className="cards">
      <Card />
    </section>
  </div>
);
