import React from 'react';
import { getCurrentDate } from '../utils';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './GlobalProgressCard.css';

export default function GlogalProgressCard() {

  const getGlobalProgress = () => {
    // TODO: Make this function dynamic when implementing logic
    return 75; 
  }

  return (
    <article className="card card--purple card--global">
      <div className="text text--big text--bold text--center">Your Daily Progress</div>
      <div className="text text--med text--center text--italic">{getCurrentDate()}</div>

      <div className="card__progress">
        <CircularProgressbar value={getGlobalProgress()} text={`${getGlobalProgress()}%`} />
      </div>

    </article>
  );
}
