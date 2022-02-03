import React from 'react';
import './ProgressCard.css';
import { IoFootsteps } from 'react-icons/io5';

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
        <h2 className="text text--med">{name}</h2>
        <IoFootsteps className="text text--med"/>
      </div>
      <div className="card__body">
        <p className="text text--small">
          lorem ipsum
        </p>
      </div>
    </article>
  );
}
