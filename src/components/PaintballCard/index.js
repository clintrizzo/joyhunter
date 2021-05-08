import React from "react";
import PcardBtn from "../PcardBtn";
import "./style.css";
import {Card} from 'react-bootstrap';

const Paintball = () => {
  return <div className="AirB">

<Card className="bg-dark text-white">
  <Card.Img src="/images/Pire.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Paintball</Card.Title>

    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
  <PcardBtn/>
</Card>
{/* <div className="ppt">
<PcardBtn/>
</div> */}
  </div>;

  
};

export default Paintball;