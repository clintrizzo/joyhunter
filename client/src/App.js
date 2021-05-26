import React from "react";
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// This goes with the Wrapper


 import Contact from "./pages/Contact";

import Airsoft from "./pages/Airsoft";


import Homepage from "./pages/Homepage";
import Paintball from "./pages/Paintball";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
   <div>
     <Navbar />
     

          
    <div className="App" style={{ 
      backgroundImage: `url("./images/Back.jpg")`}}>
      <div className="pages">
          <Route exact path="/Contact" component={Contact} /> 
          <Route exact path="/Paintball" component={Paintball} />
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/Airsoft" component={Airsoft} />
           <Route exact path="/Profile" component={Profile} />
 
      </div>
      </div>
      <Footer />
      </div>
    </Router>
  
  );
}


export default App;
