import React from 'react';
import "./logout.css";
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout()} className="navbar navbar-expand-lg navbar-light">
        logout
      </button>
    )
  )
}

export default LogoutButton