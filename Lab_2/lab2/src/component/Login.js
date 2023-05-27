import React, { useState } from 'react';

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [subscription, setSubscription] = useState('Guest');

  const handleClick = () => {
    setIsLoggedIn(true);
    setSubscription('You now have a Login');
  };

  return (
    <div>
      <p>Logged In: {isLoggedIn.toString()}</p>
      <p>State: {subscription}</p>
      <button onClick={handleClick}>Change Subscription</button>
    </div>
  );
};

export default Login;