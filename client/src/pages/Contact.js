import React from "react";
// import Form from "react-bootstrap/Form"
import emailjs from 'emailjs-com';
import "./style/style.css";


function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        
            emailjs.sendForm('service_l81mmhy', 'feedback-1', e.target, 'user_X1VBvEi1DiHUyabBmhHnw')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
    }

    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="well well-sm">
                        <form className="form-horizontal" onSubmit={sendEmail}>
                            <fieldset>
                                <legend className="text-left" style={{color:"white", paddingTop: "150px", paddingLeft: "15px"}}>Contact Us</legend>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" for="name" style={{color:"white", marginTop:"15px"}}>Name</label>
                                    <div className="col-md-9">
                                        <input id="name" name="name" type="text" placeholder="Your name" class="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-3 control-label" for="email" style={{color:"white"}}>Your E-mail</label>
                                    <div className="col-md-9">
                                        <input id="email" name="email" type="text" placeholder="Your email" class="form-control" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className="col-md-12 control-label" for="message" style={{color: "white"}}>Your message</label>
                                    <div className="col-md-9">
                                        <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-md-12 text-center">
                                        <button type="submit" className="button">Submit</button>
                                    </div>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
}

export default Contact;