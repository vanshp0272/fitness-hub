import React from 'react';

export default function ProgressCard({ name, count, goal, units }) {
  return (
    <article className="card">
      <div className="card__header">
        {name}
      </div>
      <div className="card__body">
        <p>
          lorem ipsum
        </p>        
      </div>
    </article>
  );
}
