import React from "react";
import AcardBtn from "../AcardBtn";
import "./style.css";
import {Card} from 'react-bootstrap';

const AirsoftCard = () => {
  return <div className="AirB">

<Card className="bg-dark text-white">
  <Card.Img src="/images/Aire.jpg"  alt="Card image" />
  <Card.ImgOverlay>
    
<div className="EvBetn">
    <AcardBtn/>
    </div>
  </Card.ImgOverlay>
  
</Card>


  </div>;

  
};

export default AirsoftCard;