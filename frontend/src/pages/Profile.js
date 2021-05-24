import React from "react";
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";
//import MyEvents from "../components/MyEvents";
import "./style/style.css";
import Name from "../components/profileCard"
import {useState, useEffect, post} from "react";


function Profile ()  {

  const profe = async (eventId, event_type) => {

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const res =  

await fetch ("/api/" + event_type + "/" + eventId, requestOptions)
const jsonData = await res.json();
setEvent (jsonData);
  }
  const [ event, setEvent ] = useState([]);
  const [ profile, setEvents ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/profiles/4');
        const jsonData = await res.json();
        console.log(jsonData);
        profe (jsonData.event_id, jsonData.event_type)
        setEvents(jsonData);
      } catch(err){
        console.log(err);
      }
    }
    fetchData();
  
  }, [])
 
  return (

    
    <div className="some-page-wrapper">
   <Name />
  <div className="some-page-wrapper">
  
  {/* <Card className=" top text-center" style={{borderRadius:"40px", backgroundColor:"rgb(245,245,245)"}} >
   <Card.Header className="head" style={{borderRadius:"40px", backgroundColor:"lightgray"}}>{profile.name}</Card.Header>
     <center>
     <Card.Body >
      <Card.Title className="tile">{event.email}</Card.Title>
       <hr></hr>
       <Card.Text>
     {event.city}
     </Card.Text>
      <Card.Text>
       {event.dob}
       </Card.Text>
 
     
  
  
   </Card.Body>
  </center>
   </Card>
         */}
        
 
 
{/* <Card className=" top text-center" style={{borderRadius:"40px", backgroundColor:"rgb(245,245,245)"}} data-id={event.id}>
  <Card.Header className="head" style={{borderRadius:"40px", backgroundColor:"lightgray"}}>{event.eventTitle}</Card.Header>
  <center>
  <Card.Body >l
    <Card.Title className="tile">{event.location}</Card.Title>
    <hr></hr>
    <Card.Text>
    {event.phoneNumber}
    </Card.Text>
    <Card.Text>
    {event.date}
    </Card.Text>
    <Card.Title> Rules: </Card.Title>
    <Card.Title> {event.rule1}</Card.Title>
    <Card.Title> {event.rule2}</Card.Title>
   


  </Card.Body>
 </center>
</Card> */}
</div>
</div>

  )
    };

 export default Profile;