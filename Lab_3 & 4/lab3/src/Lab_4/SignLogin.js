import React, { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

const SignLogin = () => {
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    console.log("True")
    setIsSignedUp(true);
  };

  return (
    <div>
      {isSignedUp ? (
        <Login />
      ) : (
        <SignUp onSignUp={handleSignUp} />
      )}
    </div>
  );
};

export default SignLogin;