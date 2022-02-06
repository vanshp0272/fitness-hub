import React, { useState } from 'react';
import { useFitnessData } from '../context/fitnessDataContext';
import { AiOutlineClose } from 'react-icons/ai';
import './UpdateModal.css';

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
    if (event.target.id === "count") {
      setCount(event.target.value);
    } else if (event.target.id === "goal") {
      setGoal(event.target.value);
    }
  }

  return (
    <div className="modal">
      <div className="modal__header">
        <span className="text text--med text--bold">Editing {name}</span>
        <AiOutlineClose className="text text--med modal__close" />
      </div>
      <form className="modal__body" onSubmit={handleSubmit}>
        <label htmlFor="count" className="text text--dark text--small">
          Enter new count:
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          id="count"
          value={count}
          onChange={handleChange} />
        <label htmlFor="goal" className="text text--dark text--small">
          Enter new goal:
        </label>
        <input
          type="number"
          step="0.1"
          min="0"
          id="goal"
          value={goal}
          onChange={handleChange} />
        <button className="btn btn--green">Update</button>
      </form>
    </div>
  );
}
