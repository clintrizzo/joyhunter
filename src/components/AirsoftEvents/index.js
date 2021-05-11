import React from "react";
import {Card} from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';


const AirsoftEvents = () => {
  return (
    <div className="aew">
  
<Card style={{ width: '18rem' }}>
  <Card.Header>Welcome to The Paintball Park!</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>1700 Vandegrift BLVD, Oceanside CA 92057</ListGroup.Item>
    <ListGroup.Item>Phone: (866) 985-4932</ListGroup.Item>
    <ListGroup.Item>Sun 8:30 am to 5:00 pm</ListGroup.Item>
  </ListGroup>
</Card>
</div>
  )
};

export default AirsoftEvents;