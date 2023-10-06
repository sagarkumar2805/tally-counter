import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Counter from '../components/Counter';

function CounterList() {
  const [counters, setCounters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Listen for changes in authentication state
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is not logged in, redirect to login page
        navigate('/login');
      }
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, [navigate]);

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
    <div>
      <h1>Tally-Counter App</h1>
      <div>
        <button onClick={addCounter}>Add Counter</button>
      </div>
      <div className="counters">
        {counters.map((counter) => (
          <Counter key={counter.id} onDelete={() => deleteCounter(counter.id)} />
        ))}
      </div>
    </div>
  );
}

export default CounterList;
