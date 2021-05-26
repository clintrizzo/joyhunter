import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//import "./styleS.css";

const Signup = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} className="navbar navbar-expand-lg navbar-dark bg-light">
        Log In
      </button>
    )
  )
}

export default Signup;