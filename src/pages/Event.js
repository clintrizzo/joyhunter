import React, { Component } from "react";
//import CardBtn from "../components/CardBtn";
import AirsoftCard from "../components/AirsoftCard";
import PaintballCard from "../components/PaintballCard";


function Event ()  {
 return (
  // <div style={{display: flex}}>
  // <Card
  //   {...{ className }}
  //   style={{ width: "350px" }}>
   <div className="Evnt">
   
  
     <h1>Choose your destiny</h1>
     
  <AirsoftCard />
  <PaintballCard />
  </div>
   
//    </Card>
// </div>
 )
};

export default Event;