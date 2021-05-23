import React from 'react';
import ReactPlayer from "react-player"
import "./style/style.css";



function Homepage() {

// put in a component
  return (
    <div className="App" style={{ 
      backgroundImage: `url("./images/Back.jpg")`}}>
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading text-uppercase" style={{marginTop:"-60px"}}>Services</h1>
          <hr></hr>
          <h5>Welcome to Joy Hunter! If you enjoy paintballing or airsofting this is the page for you. We set up local 
          games for both hobbies and allow you as the user to register to the games of your choice. Once you register for a game it will go to your profile page
          where you'll have reminders for when your game is coming up. Our main services for this application is to get the hobby to be better connected and to get teams 
          together again. We hope you enjoy and be sure to set up an account with us so you can earn badges for games you've played and be able to keep memories of the events 
          you've attended.</h5>
        </div>
      </div>
    </div>
  </section>  
  <br></br>
  <section className="page-section" id="videos">
    <div className="container">
      <div className="row">
        <div className="row">
        <div className="column"> 
        <center> 
        <h1>Paintball Rules</h1>
        <hr></hr>
        </center>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=z7_OhXfOUDs" className="video"/>
    </div>
    <div class="column">
      <center>
      <h1>Airsoft Rules</h1>
      <hr></hr>
      </center>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=8JVGqkAsNwI" className="video"/>
    </div>
</div>
      </div>
    </div>
  </section>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </div>
  )
}

export default Homepage;