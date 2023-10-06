import React, { useState } from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetTally,
  changeTallyName,
  setTally,
} from "../redux/reducer";

function Counter({ index, onDelete }) {
  const [label, setLabel] = useState("Counter");
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [isEditingInitialValue, setIsEditingInitialValue] = useState(false);
  const [countInput, setCountInput] = useState(0);
  const dispatch = useDispatch();

  console.log(useSelector((state) => state.tally.tallys[0]));
  const count = useSelector((state) => state.tally.tallys[index]?.count);
  const title = useSelector((state) => state.tally.tallys[index]?.title);

  const increment = () => {
    dispatch(incrementCount({ index }));
  };

  const decrement = () => {
    dispatch(decrementCount({ index }));
  };

  const reset = () => {
    dispatch(resetTally({ index }));
  };

  const handleLable = () => {
    if (isEditingLabel) {
      dispatch(changeTallyName({ index, value: label }));
      setIsEditingLabel(false);
    } else {
      setIsEditingLabel(true);
    }
  };

  const handleCount = () => {
    if (isEditingInitialValue) {
      dispatch(setTally({ index, value: countInput }));
      setIsEditingInitialValue(false);
    } else {
      setIsEditingInitialValue(true);
    }
  };
  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <div className="counter-card">
      <button className="delete-button" onClick={onDelete}>
        &times;
      </button>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <div className="button-container">
        <div className="button-row">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
      {isEditingLabel ? (
        <input
          type="text"
          value={label}
          onChange={handleLabelChange}
          autoFocus
        />
      ) : null}
      <button onClick={handleLable}>
        {isEditingLabel ? "Set" : "Edit Label"}
      </button>

      {isEditingInitialValue ? (
        <input
          type="number"
          value={countInput}
          onChange={(e) => setCountInput(parseInt(e.target.value))}
          autoFocus
        />
      ) : null}
      <button onClick={handleCount}>
        {isEditingInitialValue ? "Set" : "Edit Start Value"}
      </button>
    </div>
  );
}

export default Counter;
