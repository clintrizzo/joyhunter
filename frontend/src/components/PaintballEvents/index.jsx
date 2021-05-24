import React from "react";
import {Card,Button} from 'react-bootstrap';
import {useState, useEffect} from "react";
import "./style.css";
const PaintballEvents = () => {

  const [ paintball, setEvents ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/paintball');
        const jsonData = await res.json();
        console.log(jsonData);
        setEvents(jsonData);
      } catch(err){
        console.log(err);
      }
    }
    fetchData();
  
  }, [])


  const btnp = ( event_id ) => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "userId": 4,
  "eventId": event_id
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
      <h1 className="eventPage">Paintball Events</h1>
      {
         paintball.map(paintball => {
          return(
     
    <Card className="top text-center" style={{borderRadius:"40px", backgroundColor:"rgb(245,245,245)"}} data-id={paintball.id}>
    <Card.Header className="head" style={{borderRadius:"40px", backgroundColor:"lightgray"}}>{paintball.eventTitle}</Card.Header>
    <center>
    <Card.Body>
      <Card.Title className="tile">{paintball.location}</Card.Title>
      <hr></hr>
      <Card.Text>
      <strong>{paintball.phoneNumber}</strong>
      </Card.Text>
      <Card.Text>
    {paintball.date}
    </Card.Text>
      <Card.Title> Rules: </Card.Title>
      <Card.Title> {paintball.rule1}</Card.Title>
      <Card.Title> {paintball.rule2}</Card.Title>
      
      <Button onClick={() => btnp(paintball.id)}
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
export default PaintballEvents;