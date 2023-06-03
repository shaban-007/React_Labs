import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Login Form</h2>
      <div>
        <label>Username</label>
        <input
          type="text"
          required
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;