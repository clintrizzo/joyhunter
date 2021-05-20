import React from "react";
import {Card, Button} from 'react-bootstrap';
import {useState, useEffect} from "react";

import "./style.css";



const AirsoftEvents = () => {

  const [ airsoft, setEvents ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/airsoft');
        const jsonData = await res.json();
        console.log(jsonData);
        setEvents(jsonData);
      } catch(err){
        console.log(err);
      }
    }
    fetchData();
  
  }, [])

  return (
    <div className="aew">
      {
        airsoft.map(airsoft => {
          return(
<Card className="text-center" data-id={airsoft.id} style={{ width: '18rem' }}>
  <Card.Header>{airsoft.eventTitle}</Card.Header>
  <Card.Body>
    <Card.Title>{airsoft.location}</Card.Title>
    <Card.Text>
    {airsoft.phoneNumber}
    </Card.Text>
    <Card.Text>
    {airsoft.date}
    </Card.Text>
    <Card.Title> Rules: </Card.Title>
    <Card.Title> {airsoft.rule1}</Card.Title>
    <Card.Title> {airsoft.rule2}</Card.Title>
    
    
    <Button  variant="primary">Reserve</Button>

  </Card.Body>
 
</Card>
          )
        })
      }
  
</div>
  )
};

export default AirsoftEvents;