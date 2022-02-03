import React from 'react';
import './ProgressCard.css';
import { IoFootsteps, IoWaterSharp } from 'react-icons/io5';
import { GiNightSleep, GiWeight } from 'react-icons/gi';
import { AiTwotoneEdit } from 'react-icons/ai';
import { countFormatter } from '../utils';

export default function ProgressCard({
  name,
  cardStyle,
  cardLabel,
  count,
  goal,
  units
}) {

  const getIcon = () => {
    if (name === 'Walk') return <IoFootsteps className="text text--med" />;
    if (name === 'Workout') return <GiWeight className="text text--med" />;
    if (name === "Water") return <IoWaterSharp className="text text--med" />;
    if (name === "Sleep") return <GiNightSleep className="text text--med" />;
    return null;
  }

  return (
    <article className={`card ${cardStyle}`}>
      <div className="card__header">
        <h2 className="text text--med text--bold">{name}</h2>
        {getIcon()}
      </div>
      <div className="card__body">
        <p className="text text--small">
          {cardLabel} count:
        </p>
        <div className="card__counter">
          <span className="text text--big text--bold">
            {countFormatter(count, units)}
          </span>
          <span className="text text--med">
            {units}
          </span>
        </div>
      </div>
      <div className="card__footer">
        <div className="card__goals">
          <p className="text text--small">
            Your goal:
          </p>
          <span className="text text--small text--bold">
            {count}
          </span>
          <span className="text text--small">
            {units}
          </span>
        </div>
        <AiTwotoneEdit className="text text--big card__button" />
      </div>
    </article>
  );
}