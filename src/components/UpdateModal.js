import React, { useState } from 'react';
import { useFitnessData } from '../context/fitnessDataContext';
import { AiOutlineClose } from 'react-icons/ai';
import './UpdateModal.css';

export default function UpdateModal({
  show,
  name,
  color,
  step,
  onClose,
  doubleInput
}) {
  const { getFitnessData, updateFitnessData } = useFitnessData();
  const [count, setCount] = useState(getFitnessData(name).count);
  const [goal, setGoal] = useState(getFitnessData(name).goal);

  function handleSubmit(event) {
    event.preventDefault();
    const updatedData = { count, goal };
    updateFitnessData(name, updatedData);
    onClose();
  }

  // Handle change when count/goal is single value
  function handleChange(event) {
    if (event.target.id === "count") {
      setCount(event.target.value);
    } else if (event.target.id === "goal") {
      if (doubleInput) return;
      setGoal(event.target.value);
    }
  }

  // Handle change when count/goal have multiple elements
  function handleDoubleChange(event) {
    if (event.target.id === 'count-1') {
      setCount(prevCount => {
        return [event.target.value, prevCount[1]];
      });
    }
    else if (event.target.id === 'count-2') {
      setCount(prevCount => {
        return [prevCount[0], event.target.value];
      });
    }
    else if (event.target.id === "goal-1") {
      setGoal(prevGoal => {
        return [event.target.value, prevGoal[1]];
      });
    }
    else if (event.target.id === "goal-2") {
      setGoal(prevGoal => {
        return [prevGoal[0], event.target.value];
      });
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
            <div className="modal__input-container">
              <label
                htmlFor={doubleInput ? 'count-1' : 'count'}
                className="text text--dark text--med">
                Enter new count{doubleInput ? ' (hrs)' : ''}:
              </label>
              <input
                className="modal__input"
                type="number"
                step={step}
                min="0"
                id={doubleInput ? 'count-1' : 'count'}
                value={doubleInput ? count[0] : count}
                onChange={doubleInput ? handleDoubleChange : handleChange} />
            </div>
            {doubleInput && (<div className="modal__input-container">
              <label
                htmlFor='count-2'
                className="text text--dark text--med">
                Enter new count (min):
              </label>
              <input
                className="modal__input"
                type="number"
                step={step}
                min="0"
                id='count-2'
                value={count[1]}
                onChange={handleDoubleChange} />
            </div>)}
          </div>
          <div className="modal__row">
            <div className="modal__input-container">
              <label
                htmlFor={doubleInput ? 'goal-1' : 'goal'}
                className="text text--dark text--med">
                Enter new goal {doubleInput ? '(hrs)' : ''}:
              </label>
              <input
                className="modal__input"
                type="number"
                step={step}
                min={doubleInput ? '0' : step}
                id={doubleInput ? 'goal-1' : 'goal'}
                value={doubleInput ? goal[0] : goal}
                onChange={doubleInput ? handleDoubleChange : handleChange} />
            </div>
            {doubleInput && (<div className="modal__input-container">
              <label
                htmlFor='goal-2'
                className="text text--dark text--med">
                Enter new goal (min):
              </label>
              <input
                className="modal__input"
                type="number"
                step={step}
                min={goal[0] === '0' ? '1' : '0'}
                id='goal-2'
                value={goal[1]}
                onChange={handleDoubleChange} />
            </div>)}
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
