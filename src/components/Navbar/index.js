import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import LoginButton from "../Signup"
import LogoutButton from "../LogoutButton"
import { useAuth0 } from '@auth0/auth0-react';




function Navbar() {
  const {isAuthenticated } = useAuth0();
  const loginNavbar =  (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        JoyHunter
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/Event"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Events
            </Link>          </li>
          <li className="nav-item">
            <Link
              to="/Airsoft"
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
            >
              Airsoft
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Paintball"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Paintball
              </Link>
          </li>
              <li className="nav-item">
            <Link
              to="/Contact"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Contact Us

            </Link>
            </li>
            
            <li className="nav-item">
            <Link
              to="/Profile"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Profile

            </Link>
          </li>
          <li className ="nav-item">
          < LogoutButton />
            
          </li>
        </ul>
      </div>
    </nav>
  );
  const logoutNavbar =  (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        JoyHunter
        </Link>
        <div>
        <ul className="navbar-nav">
        <li className ="nav-item">
          < LoginButton className="NavBenn"/>
            
          </li>
          </ul>
      </div>
        </nav>)
 if (isAuthenticated){
   return loginNavbar
  
 } else return logoutNavbar 
  
}



export default Navbar;