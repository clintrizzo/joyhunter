import React from "react";
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";
//import MyEvents from "../components/MyEvents";
import "./style/style.css";
import Card from "../components/profileCard"
import {useState, useEffect, post} from "react";


function Profile ()  {

  const profe = (eventId) => {

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "userId": 4,
  "eventId": eventId
});

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("/api/profiles/reserve", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }

  const [ profiles, setEvents ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/profiles');
        const jsonData = await res.json();
        console.log(jsonData);
        setEvents(jsonData);
      } catch(err){
        console.log(err);
      }
    }
    fetchData();
  
  }, [])
 
//   return (
//     <div className="some-page-wrapper">
    
//       {
//         profiles.map(eventId => {
//           return(
// <Card className=" top text-center" style={{borderRadius:"40px", backgroundColor:"rgb(245,245,245)"}} data-id={airsoft.id}>
//   <Card.Header className="head" style={{borderRadius:"40px", backgroundColor:"lightgray"}}>{airsoft.eventTitle}</Card.Header>
//   <center>
//   <Card.Body >
//     <Card.Title className="tile">{airsoft.location}</Card.Title>
//     <hr></hr>
//     <Card.Text>
//     {airsoft.phoneNumber}
//     </Card.Text>
//     <Card.Text>
//     {airsoft.date}
//     </Card.Text>
//     <Card.Title> Rules: </Card.Title>
//     <Card.Title> {airsoft.rule1}</Card.Title>
//     <Card.Title> {airsoft.rule2}</Card.Title>
   


//   </Card.Body>
//  </center>
// </Card>
//           )
//         })
//       }
// </div>
//   )
    };

 export default Profile;