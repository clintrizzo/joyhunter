import React from "react";
import {Card, Button} from 'react-bootstrap';
import {useState, useEffect} from "react";

import "./style.css";
import APIevents from "../../utils/APIevents"


const AirsoftEvents = () => {

  const [ events, setEvents ] = useState([]);

  useEffect(() => {
    APIevents.getEvent()
    .then(res => {
      console.log(res);
      setEvents(res);
    })
  }, [])

  return (
    <div className="aew">
      {
        events.map(event => {
          return(
<Card className="text-center" style={{ width: '18rem' }}>
  <Card.Header>{event.title}</Card.Header>
  <Card.Body>
    <Card.Title>1700 Vandegrift BLVD, Oceanside CA 92057</Card.Title>
    <Card.Text>
    (866) 985-4932
    </Card.Text>
    <Card.Text>
    06/09/2020
    </Card.Text>
    <Card.Title> Rules </Card.Title>
    <Card.Title> 1- Close Range only.</Card.Title>
    <Card.Title> 2- No body Armor.</Card.Title>
    <Card.Title> 3- No running.</Card.Title>
    
    <Button  variant="primary">Reservation</Button>

  </Card.Body>
 
</Card>
          )
        })
      }
  
</div>
  )
};

export default AirsoftEvents;