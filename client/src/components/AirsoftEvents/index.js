import React from "react";
import {Card, Button} from 'react-bootstrap';
import {useState, useEffect, post} from "react";

 

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

  const btn = ( event_id ) => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "userId": 4,
  "eventId": event_id,
  "event_type": "airsoft"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/api/profiles/reserve", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  return (
    <div className="some-page-wrapper">
      <h1 className="eventPage">Airsoft Events</h1>
      {
        airsoft.map(airsoft => {
          return(
<Card className=" top text-center" style={{borderRadius:"40px", backgroundColor:"rgb(245,245,245)"}} data-id={airsoft.id}>
  <Card.Header className="head" style={{borderRadius:"40px", backgroundColor:"lightgray"}}>{airsoft.eventTitle}</Card.Header>
  <center>
  <Card.Body >
    <Card.Title className="tile">{airsoft.location}</Card.Title>
    <hr></hr>
    <Card.Text>
    {airsoft.phoneNumber}
    </Card.Text>
    <Card.Text>
    {airsoft.date}
    </Card.Text>
    <Card.Title> Rules: </Card.Title>
    <Card.Title> {airsoft.rule1}</Card.Title>
    <Card.Title> {airsoft.rule2}</Card.Title>
   
    <Button onClick={() => btn(airsoft.id)}
 className="button">Reserve</Button>

  </Card.Body>
 </center>
</Card>
          )
        })
      }
</div>
  )
    };

export default AirsoftEvents;