import React, { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Username is ${username}, email: ${email}, Age: ${age}`);
  };

  return (
    <div>
      <h2>Signup Form</h2>
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
      <div>
        <label>Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="text"
          required
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignUp;