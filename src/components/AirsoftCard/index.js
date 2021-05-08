import React from "react";
import AcardBtn from "../AcardBtn";
import "./style.css";
import {Card} from 'react-bootstrap';

const Airsoft = () => {
  return <div className="AirB">

<Card className="bg-dark text-white">
  <Card.Img src="/images/Aire.jpg"  alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Airsoft</Card.Title>

    {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
  </Card.ImgOverlay>
  <AcardBtn/>
</Card>
{/* <div className="cpt">
  <CardBtn/>
</div> */}

  </div>;

  
};

export default Airsoft;