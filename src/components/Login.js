// Login.js

import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Hardcoded credentials for demo purposes
    const mockUsername = 'user';
    const mockPassword = 'password';

    // Local authentication logic
    if (username === mockUsername && password === mockPassword) {
      console.log('Login successful');
      setError('');
      
      // Simulate successful login by storing token or redirecting
      localStorage.setItem('authToken', 'fake-jwt-token');
      
      // Redirect to a protected route (e.g., dashboard)
      window.location.href = '/dashboard';
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
