const sendEmail = async (name, emailAddress, message) => {
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email: emailAddress, message }),
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  };
  
  
  export default sendEmail;