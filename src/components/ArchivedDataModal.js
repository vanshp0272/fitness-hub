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
          walkCount={data.walkCount} walkGoal={data.walkCount}
          workoutCount={data.workoutCount} workoutGoal={data.workoutGoal}
          waterCount={data.waterCount} waterGoal={data.waterGoal}
          sleepCount={data.sleepCount} sleepGoal={data.sleepGoal}
          globalProgress={data.globalProgress}
          />
        ))}
      </div>
    </div >
  )
}
