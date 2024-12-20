import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "bswprofilio@gmail.com", // Use environment variables here
    pass: "yxyw ahoy xyqa rbcz",  // Use environment variables here
  },
});

// Route to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "bswiley@gmail.com",
      subject: "New Message from Profile Website",
      text: `${name} (${email}) sent the following message:\n\n${message}`,
    });

    res.status(200).send({ success: true, info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ success: false, error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
