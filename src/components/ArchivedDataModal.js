import React from 'react';
import { useFitnessData } from '../context/fitnessDataContext';
import './ArchivedDataModal.css';
import ArchivedProgressCard from './ArchivedProgressCard';

export default function ArchivedDataModal({ show }) {
  const { archivedData } = useFitnessData();

  return (
    <div className={`modal-archived ${show ? 'modal-archived--active' : ''}`}>
      <div className="modal-archived__title">
        <h2>Your activity</h2>
        <div className="modal-archived__hrule"></div>
      </div>
      <div className="modal-archived__card-container">
        {archivedData.map(data => (
          <ArchivedProgressCard 
          key={data.date}
          date={data.date}
          walkCount={data.walk.count} walkGoal={data.walk.goal}
          workoutCount={data.workout.count} workoutGoal={data.workout.goal}
          waterCount={data.water.count} waterGoal={data.water.goal}
          sleepCount={data.sleep.count} sleepGoal={data.sleep.goal}
          globalProgress={data.globalProgress}
          />
        ))}
      </div>
    </div >
  )
}
