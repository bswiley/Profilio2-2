import React, { useState,useRef } from 'react';
import sendEmail from './emailService';


const Contact = () => {
  const form =useRef();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailAddressValid, setIsEmailAddressValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // New state for tracking typing

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmailAddress(e.target.value);
  const handleMessageChange = (e) =>  setMessage(e.target.value);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidName = name.trim() !== "";
    const isValidEmailAddress = emailRegex.test(emailAddress);
    const isValidMessage = message.trim() !== "";
    

    if (isValidName && isValidEmailAddress && isValidMessage) {
      // Display confirmation message and ask for confirmation to send the email
      if (window.confirm(`From: ${name}\nEmail: ${emailAddress}\n\nMessage: ${message}\n\nSend this email?`)) {
        // If the user clicks "Yes", send email, clear the inputs and show "message sent" alert
        try{
          await sendEmail(name, emailAddress, message);
          setName("");
          setEmailAddress("");
          setMessage("");
          setIsMessageSent(true);
          setIsTyping(false); // Reset typing state to false
          alert("Message sent successfully.");
        } catch (error) {
          console.error("Error sending email:", error);
          alert ("Failed to send the message. Please try again.");
        }
      }
    }
  };
  return (
    <div>
      <h1>Contact Me</h1>
         <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
            {!isNameValid && <span className="error">Please enter your name.</span>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={emailAddress}
              onChange={handleEmailChange}
            />
            {!isEmailAddressValid && <span className="error">Please enter a valid email address.</span>}
          </div>
          <div>
            <label htmlFor="message">Message:</label>
              <textarea 
                id="message"
                rows="15"
                value={message}
                onChange={handleMessageChange}
              />
            {!isMessageValid && <span className="error">Please enter a message.</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
        {isMessageSent && !isTyping &&( /* Show "Message sent." text only if not typing */
          <div>
            <p>Message sent successfully.</p>
          </div>
        )}
    </div>
  );
};

export default Contact;