import React from 'react';
import ReactPlayer from "react-player"
import Signup from "../components/Signup"
import LogoutButton from "../components/LogoutButton"
import "./style/style.css";


function Homepage() {

// put in a component
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <nav className="navbar-nav text-uppercase ml-auto">
        <a className="nav-link js-scroll-trigger" href="#page-top"><h1>Joy Hunter</h1></a>
            <a className="nav-link js-scroll-trigger" href="#services">Services </a>
            <a className="nav-link js-scroll-trigger" href="#videos">Videos </a>
        </nav>
      </div>
    </div>
  </nav>
  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Welcome to Joy Hunter! If you enjoy paintballing or airsofting this is the page for you. We set up local 
          games for both hobbies and allow you as the user to register to the games of your choice. Once you register for a game it will go to your profile page
          where you'll have reminders for when your game is coming up. Our main services for this application is to get the hobby to be better connected and to get teams 
          together again. We hope you enjoy and be sure to set up an account with us so you can earn badges for games you've played and be able to keep memories of the events 
          you've attended.</h3>
        </div>
      </div>
    </div>
  </section>

  <section className="page-section" id="videos">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Videos</h2>
        </div>
        <div id="videoal">
<table>
<tr><td>
<h3>Airsoft Rules</h3>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=8JVGqkAsNwI"
      />
        </td></tr>
        <tr><td>
      <h3>Paintball Rules </h3>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=z7_OhXfOUDs"
      />
  </td></tr>
  </table>
</div>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Homepage;