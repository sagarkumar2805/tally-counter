import React, { useState } from 'react';
import './Counter.css';

function Counter({ onDelete }) {
  const [count, setCount] = useState(0);
  const [label, setLabel] = useState('Counter');
  const [isEditingLabel, setIsEditingLabel] = useState(false);
  const [isEditingInitialValue, setIsEditingInitialValue] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const handleLabelChange = (e) => {
    setLabel(e.target.value);
  };

  return (
    <div className="counter-card">
      <button className="delete-button" onClick={onDelete}>
        &times;
      </button>
      <h2>{label}</h2>
      <p>Count: {count}</p>
      <div className="button-container">
        <div className="button-row">
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
        <button onClick={reset}>Reset</button>
      </div>
      <button onClick={() => setIsEditingLabel(!isEditingLabel)}>
        Edit Label
      </button>
      {isEditingLabel ? (
        <input
          type="text"
          value={label}
          onChange={handleLabelChange}
          onBlur={() => setIsEditingLabel(false)}
          autoFocus
        />
      ) : null}
      <button onClick={() => setIsEditingInitialValue(!isEditingInitialValue)}>
        Edit Start Value
      </button>
      {isEditingInitialValue ? (
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          onBlur={() => setIsEditingInitialValue(false)}
          autoFocus
        />
      ) : null}
    </div>
  );
}

export default Counter;
