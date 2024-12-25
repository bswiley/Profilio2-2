import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import {body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';

dotenv.config();

if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("Missing EMAIL_USER or EMAIL_PASS in environment variables.");
  process.exit(1);
}

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000", // Update for production
  methods: "GET,POST",
  allowedHeaders: ["Content-Type"],
};

app.use(cors());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max requests per IP
});


// Nodemailer setup
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle email sending
app.post('/send-email', 
  limiter,
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('emailAddress').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message cannot be empty'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { name, emailAddress, message } = req.body;

  try {
    const info = await transporter.sendMail({
      from: `"${name}" <${emailAddress}>`,
      to: "bswiley@gmail.com",
      subject: "New Message from Profile Website",
      text: `${name} (${emailAddress}) sent the following message:\n\n${message}`,
    });

    res.status(200).send({ success: true, info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({ success: false, error: "Internal server error. Please try again later." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
