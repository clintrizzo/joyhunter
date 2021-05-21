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
  return (
    <div className="some-page-wrapper">
      <h1 className="eventPage">Paintball Events</h1>
      {
         paintball.map(paintball => {
          return(
     
    <Card className="top text-center" data-id={paintball.id}>
    <Card.Header className="head">{paintball.eventTitle}</Card.Header>
    <center>
    <Card.Body>
      <Card.Title className="tile">{paintball.location}</Card.Title>
      <hr></hr>
      <Card.Text>
      {paintball.phoneNumber}
      </Card.Text>
      <Card.Text>
    {paintball.date}
    </Card.Text>
      <Card.Title> Rules: </Card.Title>
      <Card.Title> {paintball.rule1}</Card.Title>
      <Card.Title> {paintball.rule2}</Card.Title>
      
      <Button variant="primary">Reservation</Button>
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