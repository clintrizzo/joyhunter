import React from "react";
//import CardBtn from "../components/CardBtn";
import AirsoftCard from "../components/AirsoftCard";
import PaintballCard from "../components/PaintballCard";
import "./style/style.css";

function Event ()  {
 return (
  // <div style={{display: flex}}>
  // <Card
  //   {...{ className }}
  //   style={{ width: "350px" }}>
   <div className="Evnt">
         <div style={{ 
      backgroundImage: `url("./images/Back.jpg")` 
    }}>
      
    
   
  <div className="htr">
     <h1>Choose your destiny</h1>
    </div>
     
  <AirsoftCard />
  <PaintballCard />
  </div>
  </div>
   
//    </Card>
// </div>
 )
};

export default Event;