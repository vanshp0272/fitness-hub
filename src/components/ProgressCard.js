import React from 'react';
import './ProgressCard.css';

export default function ProgressCard({
  name,
  cardStyle,
  count,
  goal,
  units
}) {
  return (
    <article className={`card ${cardStyle}`}>
      <div className="card__header">
        <h2>{name}</h2>
      </div>
      <div className="card__body">
        <p>
          lorem ipsum
        </p>
      </div>
    </article>
  );
}
