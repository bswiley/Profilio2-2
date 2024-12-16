import { useState } from 'react';
import sendEmail from './emailService';


const Contact = () => {
 // const form =useRef();
  const [name, setName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false); // State for tracking typing

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsTyping(true); // User is typing
  };

  const handleEmailChange = (e) => {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the name is not empty
    const isValidName = name.trim() !== "";
    setIsNameValid(isValidName);

    // Check if the email address is valid
    const isValidEmail = emailRegex.test(emailAddress);
    setIsEmailValid(isValidEmail);

    // Check if the message is not empty
    const isValidMessage = message.trim() !== "";
    setIsMessageValid(isValidMessage);

    if (isValidName && isValidEmail && isValidMessage) {
      // Display confirmation message and ask for confirmation to send the email
      if (window.confirm(`From: ${name}\nEmail: ${emailAddress}\n\nMessage: ${message}\n\nSend this email?`)) {
        // If the user clicks "Yes", send email, clear the inputs, and show "message sent" alert
        try {
        await sendEmail (name, emailAddress, message);
        setName("");
        setEmailAddress("");
        setMessage("");
        setIsMessageSent(true);
        setIsTyping(false); // Reset typing state to false
        alert("Message sent successfully.");
      } catch (error) {
        console.error ("Error sending email:", error);
        alert ("Failed to send the message.  Please try again.");
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
              onChange={handleEmailChange}
            />
            {!isEmailValid && <span className="error">Please enter a valid email address.</span>}
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