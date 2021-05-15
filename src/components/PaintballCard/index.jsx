import React from "react";
import PcardBtn from "../PcardBtn";
import "./style.css";
import {Card} from 'react-bootstrap';

const Paintball = () => {
  return <div className="AirB">

<Card className="bg-dark text-white">
  <Card.Img src="/images/Pire.jpg" alt="Card image" />
  <Card.ImgOverlay>
  <div className="PvBetn">
    <PcardBtn />
    </div>
  </Card.ImgOverlay>
  
</Card>

  </div>;

  
};

export default Paintball;