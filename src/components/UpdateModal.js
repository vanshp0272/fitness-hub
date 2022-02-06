import React from 'react';
import { useFitnessData } from '../context/fitnessDataContext';

export default function UpdateModal({ name }) {
  const { updateFitnessData } = useFitnessData();

  return (
    <div className="modal">
      <div className="modal__header">Editing {name}</div>
      <form>
        <label for="count">Enter new count:</label>
        <input type="number" id="count"></input>
        <label for="goal">Enter new goal:</label>
        <input type="number" id="goal"></input>
        <button>Update</button>
      </form>
    </div>
  );
}
