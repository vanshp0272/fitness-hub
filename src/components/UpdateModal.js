import React, { useState } from 'react';
import { useFitnessData } from '../context/fitnessDataContext';
import { AiOutlineClose } from 'react-icons/ai';
import './UpdateModal.css';

export default function UpdateModal({ show, name, color, onClose }) {
  const { getFitnessData, updateFitnessData } = useFitnessData();

  const [count, setCount] = useState(getFitnessData(name).count);
  const [goal, setGoal] = useState(getFitnessData(name).goal);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedData = { count, goal };
    updateFitnessData(name, updatedData);
    onClose();
  }

  function handleChange(event) {
    if (event.target.id === "count") {
      setCount(event.target.value);
    } else if (event.target.id === "goal") {
      setGoal(event.target.value);
    }
  }

  return (
    <>
      <div className={`modal modal--${color} ${show ? 'modal--active' : ''}`}>
        <div className="modal__header">
          <span className="text text--big text--bold">Editing {name}</span>
          <AiOutlineClose
            className="text text--med modal__close"
            onClick={onClose} />
        </div>
        <form className="modal__body" onSubmit={handleSubmit}>
          <div className="modal__row">
            <label htmlFor="count" className="text text--dark text--med">
              Enter new count:
            </label>
            <input
              className="modal__input"
              type="number"
              step="0.1"
              min="0"
              id="count"
              value={count}
              onChange={handleChange} />
          </div>
          <div className="modal__row">
            <label htmlFor="goal" className="text text--dark text--med">
              Enter new goal:
            </label>
            <input
              className="modal__input"
              type="number"
              step="0.1"
              min="0"
              id="goal"
              value={goal}
              onChange={handleChange} />
          </div>
          <button className={`btn btn--${color}`}>Update</button>
        </form>
      </div>
      <div
        className={`overlay ${show ? 'overlay--active' : ''}`}
        onClick={onClose}
      ></div>
    </>
  );
}
