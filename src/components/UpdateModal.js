import React, { useState } from 'react';
import { useFitnessData } from '../context/fitnessDataContext';

export default function UpdateModal({ name }) {
  const { getFitnessData, updateFitnessData } = useFitnessData();

  const [count, setCount] = useState(getFitnessData(name).count);
  const [goal, setGoal] = useState(getFitnessData(name).goal);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedData = { count, goal };
    updateFitnessData(name, updatedData);
  }

  function handleChange(event) {
    if(event.target.id === "count") {
      setCount(event.target.value);
    } else if(event.target.id === "goal") {
      setGoal(event.target.value);
    }
  }

  return (
    <div className="modal">
      <div className="modal__header">Editing {name}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="count">Enter new count:</label>
        <input
          type="number"
          step="0.1"
          min="0"
          id="count"
          value={count}
          onChange={handleChange} />
        <label htmlFor="goal">Enter new goal:</label>
        <input
          type="number"
          step="0.1"
          min="0"
          id="goal"
          value={goal}
          onChange={handleChange} />
        <button>Update</button>
      </form>
    </div>
  );
}
