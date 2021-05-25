import React from "react";
import "./profileCard.css";


function Profile ()  {
  return (
<div className="App" style={{ 
      backgroundImage: `url("./images/Back.jpg")`}}>
  <div className="padding">
    <div className="row">
      <div className="column">
        <div class="card" style={{borderRadius:"30px", backgroundColor:"rgb(245,245,245)"}}>
          <img src="./images/nor.jpg" alt="Avatar" className="profileImage"></img>
        </div>
      </div>
      <div className="column">
        <div className="card" style={{borderRadius:"30px", backgroundColor:"rgb(245,245,245)"}}>
          <h1 className="badges"><center>Noreldin Saad</center></h1>
          <center><hr></hr></center>
          <br></br>
            <div className="inside" style={{backgroundColor:"lightgray", borderRadius:"30px"}}>
              <h4 style={{paddingTop:"15px"}}><strong>Game Choice:</strong> Paintball</h4>
              <h4 style={{color:"black"}}><strong>Date of Birth</strong>: June 01, 1994</h4>
              <h4 style={{color:"black"}}><strong>City</strong>: Anaheim</h4>
            </div>
            <br></br>
            <h1 className="badges"><center>Earned Badges</center></h1>
            <center><hr></hr></center>
            <br></br>
            <div className="row">
              <div className="column">
                <div className="inside" style={{backgroundColor:"lightgray", borderRadius:"30px"}}>
                  <h3>Most Wins</h3>
                  <img src="./images/survived.jpg" alt="Most Wins"></img>
                </div>
              </div>
              <div className="column">
                <div className="inside" style={{backgroundColor:"lightgray", borderRadius:"30px"}}>
                  <h3>Most Kills In A Game</h3>
                  <img src="./images/killstreak.jpg" alt="Killstreak"></img>
                </div>
              </div>
              <div className="column">
                <div className="inside" style={{backgroundColor:"lightgray", borderRadius:"30px"}}>
                  <h3>Most Headshots</h3>
                  <img src="./images/headshots.jpg" alt="Headshots"></img>
                </div>
              </div>
              <div className="column">
                <div className="inside" style={{backgroundColor:"lightgray", borderRadius:"30px"}}>
                  <h3>Most Flags Captured</h3>
                  <img src="./images/flags.jpg" alt="Captured"></img>
                </div>
              </div>
              <div className="column">
                <div className="inside" style={{backgroundColor:"lightgray", borderRadius:"30px"}}>
                  <h3>Survived An Entire Game</h3>
                  <img src="./images/survived.jpg" alt="Survival"></img>
                </div>
              </div>
              <div className="column">
                <div className="inside" style={{backgroundColor:"lightgray", borderRadius:"30px"}}>
                  <h3>Revived Teammate</h3>
                  <img src="./images/savior.jpg" alt="Medic"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br></br>
        <div class="card" style={{borderRadius:"30px", width: "90%", marginLeft:"95px", borderRadius:"20px", backgroundColor:"rgb(245,245,245)"}}>
          <h1 style={{color:"black"}}><center>Upcoming Reserved Games</center></h1>
        </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
  )
 };

 export default Profile;