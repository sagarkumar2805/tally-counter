import React, { useState } from 'react';
import { auth } from '../Firebase'; // Import the Firebase app object
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Signup successful');
      navigate('/login'); // Navigate to the login page after successful signup
    } catch (error) {
      console.error('Signup error', error);
    }
  };

  const handleLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className='auth-container'>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account? <span onClick={handleLogin}>Login</span>
      </p>
    </div>
  );
}

export default SignUp;
