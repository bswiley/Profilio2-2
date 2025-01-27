import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailAddressValid, setIsEmailAddressValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // New state for tracking typing

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsTyping(true); // User is typing
  };

  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
    setIsTyping(true); // User is typing
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setIsTyping(true); // User is typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Email validation regex
    const emailAddressRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // Check if the name is not empty
    const isValidName = name.trim() !== "";
    setIsNameValid(isValidName);

    // Check if the email address is valid
    const isValidEmailAddress = emailAddressRegex.test(emailAddress);
    setIsEmailAddressValid(isValidEmailAddress);

    // Check if the message is not empty
    const isValidMessage = message.trim() !== "";
    setIsMessageValid(isValidMessage);

    if (isValidName && isValidEmailAddress && isValidMessage) {
      if (window.confirm(`From: ${name}\nEmail: ${emailAddress}\n\nMessage: ${message}\n\nSend this email?`)){
    try {
      const response = await axios.post("https://main.d1g49s2r3ywe5y.amplifyapp.com/send-email", {
        name,
        emailAddress,
        message,
      });
    if (response.status === 200){
        setName("");
        setEmailAddress("");
        setMessage("");
        setIsMessageSent(true);
        setIsTyping(false); // Reset typing state to false
        alert("Message sent successfully.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send the message. Please try again.");
    }
  }
}
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <div className="contactForm">
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
              onChange={handleEmailAddressChange}
            />
            {!isEmailAddressValid && <span className="error">Please enter a valid email address.</span>}
          </div>
          <div>
            <div className="message">
              <label htmlFor="message" className="labelWithSpace">Message:</label>
              <textarea className="area"
                name="message"
                rows="15"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            {!isMessageValid && <span className="error">Please enter a message.</span>}
          </div>
          <button className="submit" type="submit">Submit</button>
        </form>
        {isMessageSent && !isTyping && ( /* Show "Message sent." text only if not typing */
          <div>
            <p>Message sent.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
