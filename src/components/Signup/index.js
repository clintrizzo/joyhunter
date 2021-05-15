import React from 'react';
import "./signup.css";
import { useAuth0 } from '@auth0/auth0-react';
//import "./styleS.css";

const Signup = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  )
}

export default Signup;