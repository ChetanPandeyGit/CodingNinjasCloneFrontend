import React, { useState } from "react";
import contact from "../images/contact.svg";

const Contact = () => {
  const [contactNumber, setContactNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="cout">
      <div className="contact">
        <div className="queries">
          <p>Have any queries?</p>
          <p>Get a free counselling session from our experts</p>
          <div className="toll-free">
            <img src={contact} alt="contact" />
            <div className="call">
              <p>Call us on our toll free number</p>
              <p>1800-123-3598</p>
            </div>
          </div>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>            
              <input
                type="text"
                placeholder="Contact Number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              />    
              <input
                type="text"
                placeholder="First Name *"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />            
              <input
                type="email"
                placeholder="Email Address *"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />            
              <input
                type="text"
                placeholder="Graduation Year *"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
                required
              />           
            <button type="submit">Request Callback</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
