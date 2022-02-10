import React from 'react';
import './ArchivedProgressCard.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ArchivedProgressCard({
  date,
  walkCount, walkGoal,
  workoutCount, workoutGoal,
  waterCount, waterGoal,
  sleepCount, sleepGoal,
  globalProgress
}) {
  return (
    <div className="archived-card">
      <div className="archived-card__progress-container">
        <div className="archived-card__date text text--bold text--small">
          {date.split('T')[0]}
        </div>
        <CircularProgressbar
          className="archived-card__progress"
          value={Math.round(globalProgress * 100)}
          text={`${Math.round(globalProgress * 100)}%`} />
      </div>
      <div className="archived-card__summary-container">
        <div className="archived-card__summary">
          Walk
        </div>
      </div>
    </div>
  );
}
