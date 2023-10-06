import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom"; // Import Outlet
import Counter from "./components/Counter";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import CounterList from "./Pages/CounterList";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([]);

  const addCounter = () => {
    const newCounter = {
      id: Date.now(),
    };
    setCounters([...counters, newCounter]);
  };

  const deleteCounter = (id) => {
    const updatedCounters = counters.filter((counter) => counter.id !== id);
    setCounters(updatedCounters);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<CounterList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
