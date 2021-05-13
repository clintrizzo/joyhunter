import React from "react";
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import Banner from "../components/Banner";
//import MyEvents from "../components/MyEvents";
//import "./style/style.css";


function Profile ()  {
  return (
   // <div style={{display: flex}}>
   // <Card
   //   {...{ className }}
   //   style={{ width: "350px" }}>
    <div className="Prof">
          <div style={{ 
       backgroundImage: `url("./images/Back.jpg")` 
     }}>
       
     
    
   <div className="profilewr">
      <h1>Profile</h1>
     </div>
      
   <Banner />
   
   </div>
   </div>

  )
 };

 export default Profile;