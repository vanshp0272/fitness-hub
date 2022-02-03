import React from 'react';
import './GlobalProgressCard.css';
import { getCurrentDate } from '../utils';

export default function GlogalProgressCard() {

  return (
    <article className="card card--purple card--global">
      <div className="text text--big text--bold text--center">Your Daily Progress</div>
      <div className="text text--med text--center text--italic">{getCurrentDate()}</div>
    </article>
  );
}
