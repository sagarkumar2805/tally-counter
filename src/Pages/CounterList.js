import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Counter from "../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addTally, deleteTally } from "../redux/reducer";
function CounterList() {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(useSelector((state) => state));
  const counters = useSelector((state) => state.tally.tallys);
  const dispatch = useDispatch();
  const user = localStorage.getItem("User");
  if (!user) {
    window.location.href = "/login";
  }

  const addCounter = () => {
    dispatch(addTally());
  };

  const deleteCounter = (index) => {
    dispatch(deleteTally({ index }));
  };
  const handleLogout = () => {
    localStorage.removeItem("User");
    window.location.href = "/login";
  };
  return (
    <div>
      <h1>Tally-Counter App</h1>
      <div>
        <button onClick={addCounter}>Add Counter</button>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div className="counters">
        {counters?.map((_, index) => (
          <Counter
            key={index}
            index={index}
            onDelete={() => deleteCounter(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default CounterList;
