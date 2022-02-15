import React from 'react';
import './ArchivedProgressCard.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoFootsteps, IoWaterSharp } from 'react-icons/io5';
import { GiNightSleep, GiWeight } from 'react-icons/gi';
import { countFormatter } from '../utils';

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
        <div className="archived-card__summary summary--green">
          <div className="summary__header">
            <h3 className="text text--small text--bold">Walk</h3>
            <IoFootsteps className="text text--small" />
          </div>
          <div className="summary__content">
            <div className="summary__count">
              {countFormatter(walkCount, "km")} / {countFormatter(walkGoal, "km")}
              </div>
          </div>
        </div>
        <div className="archived-card__summary summary--orange">
          <div className="summary__header">
            <h3 className="text text--small text--bold">Workout</h3>
            <GiWeight className="text text--small" />
          </div>
          <div className="summary__content">
            <div className="summary__count">
              {countFormatter(workoutCount, "hrs")} / {countFormatter(workoutGoal, "hrs")}
            </div>
          </div>
        </div>
        <div className="archived-card__summary summary--blue">
          <div className="summary__header">
            <h3 className="text text--small text--bold">Water</h3>
            <IoWaterSharp className="text text--small" />
          </div>
          <div className="summary__content">
            <div className="summary__count">{waterCount} / {waterGoal}</div>
          </div>
        </div>
        <div className="archived-card__summary summary--purple">
          <div className="summary__header">
            <h3 className="text text--small text--bold">Sleep</h3>
            <GiNightSleep className="text text--small" />
          </div>
          <div className="summary__content">
            <div className="summary__count">
              {countFormatter(sleepCount, "hrs")} / {countFormatter(sleepGoal, "hrs")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
