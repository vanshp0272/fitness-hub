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
    if (event.target.id === `count--${name}`) {
      setCount(event.target.value);
    } else if (event.target.id === `goal--${name}`) {
      if (doubleInput) return;
      setGoal(event.target.value);
    }
  }

  // Handle change when count/goal have multiple elements
  function handleDoubleChange(event) {
    if (event.target.id === `count-1--${name}`) {
      setCount(prevCount => {
        return [event.target.value, prevCount[1]];
      });
    }
    else if (event.target.id === `count-2--${name}`) {
      setCount(prevCount => {
        return [prevCount[0], event.target.value];
      });
    }
    else if (event.target.id === `goal-1--${name}`) {
      setGoal(prevGoal => {
        return [event.target.value, prevGoal[1]];
      });
    }
    else if (event.target.id === `goal-2--${name}`) {
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
          {!doubleInput ? (
            <label
              htmlFor={`count--${name}`}
              className="text text--dark text--med"
            >
              Enter new count:
            </label>
          ) : (
            <div className="text text--dark text--med">Enter new count:</div>
          )}
          <div className="modal__row">
            <div className="modal__input-container">
              {doubleInput && (<label
                htmlFor={`count-1--${name}`}
                className="text text--dark text--med">
                (hrs)
              </label>)}
              <input
                className="modal__input"
                type="number"
                step={step}
                min="0"
                id={doubleInput ? `count-1--${name}` : `count--${name}`}
                value={doubleInput ? count[0] : count}
                onChange={doubleInput ? handleDoubleChange : handleChange} />
            </div>
            {doubleInput && (<div className="modal__input-container">
              <label
                htmlFor={`count-2--${name}`}
                className="text text--dark text--med">
                (min)
              </label>
              <input
                className="modal__input"
                type="number"
                step={step}
                min="0"
                id={`count-2--${name}`}
                value={count[1]}
                onChange={handleDoubleChange} />
            </div>)}
          </div>
          {!doubleInput ? (
            <label
              htmlFor={`goal--${name}`}
              className="text text--dark text--med"
            >
              Enter new goal:
            </label>
          ) : (
            <div className="text text--dark text--med">Enter new goal:</div>
          )}
          <div className="modal__row">
            <div className="modal__input-container">
              {doubleInput && (<label
                htmlFor={`goal-1--${name}`}
                className="text text--dark text--med">
                (hrs)
              </label>)}
              <input
                className="modal__input"
                type="number"
                step={step}
                min={doubleInput ? '0' : step}
                id={doubleInput ? `goal-1--${name}` : `goal--${name}`}
                value={doubleInput ? goal[0] : goal}
                onChange={doubleInput ? handleDoubleChange : handleChange} />
            </div>
            {doubleInput && (<div className="modal__input-container">
              <label
                htmlFor={`goal-2--${name}`}
                className="text text--dark text--med">
                (min)
              </label>
              <input
                className="modal__input"
                type="number"
                step={step}
                min={goal[0] === '0' ? '1' : '0'}
                id={`goal-2--${name}`}
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
