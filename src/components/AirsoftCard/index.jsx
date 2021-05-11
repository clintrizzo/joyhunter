import React from "react";
import AcardBtn from "../AcardBtn";
import "./style.css";
import {Card} from 'react-bootstrap';

const AirsoftCard = () => {
  return <div className="AirB">

<Card className="bg-dark text-white">
  <Card.Img src="/images/Aire.jpg"  alt="Card image" />
  <Card.ImgOverlay>
    {/* <Card.Title>Airsoft</Card.Title> */}
    <AcardBtn/>
    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
  
</Card>
{/* <div className="cpt">
  <CardBtn/>
</div> */}

  </div>;

  
};

export default AirsoftCard;