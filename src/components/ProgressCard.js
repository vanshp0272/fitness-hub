import React from 'react';
import './ProgressCard.css';
import { IoFootsteps, IoWaterSharp } from 'react-icons/io5';
import { GiNightSleep, GiWeight } from 'react-icons/gi';

export default function ProgressCard({
  name,
  cardStyle,
  count,
  goal,
  units
}) {

  const getIcon = () => {
    if (name === 'Walk') return <IoFootsteps className="text text--med" />;
    if (name === 'Workout') return <GiWeight className="text text--med" />;
    if (name === "Water") return <IoWaterSharp className="text text--med"/>;
    if (name === "Sleep") return <GiNightSleep className="text text--med" />;
    return null;
  }

  return (
    <article className={`card ${cardStyle}`}>
      <div className="card__header">
        <h2 className="text text--med">{name}</h2>
        {getIcon()}
      </div>
      <div className="card__body">
        <p className="text text--small">
          lorem ipsum
        </p>
      </div>
    </article>
  );
}
