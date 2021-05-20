import React from "react";
import {Card,Button} from 'react-bootstrap';
//import { ListGroup } from 'react-bootstrap';
import "./style.css";
const PaintballEvents = () => {
  return (
    <div className="aew">
    <Card className="text-center" style={{ width: '18rem' }}>
    <Card.Header>Welcome to The Paintball Park!</Card.Header>
    <Card.Body>
      <Card.Title>1700 Vandegrift BLVD, Oceanside CA 92057</Card.Title>
      <Card.Text>
      (866) 985-4932
      </Card.Text>
      <Card.Title> Rules </Card.Title>
      <Card.Title> 1- Close Range only.</Card.Title>
      <Card.Title> 2- No body Armor.</Card.Title>
      <Card.Title> 3- No running.</Card.Title>
      <Button variant="primary">Reservation</Button>
    </Card.Body>
   
  </Card>
  </div>
  )
};
export default PaintballEvents;