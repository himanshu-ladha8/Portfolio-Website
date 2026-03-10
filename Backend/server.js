const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// CORS - allow frontend origin so browser requests from deployed/local frontend succeed
const FRONTEND_URL = process.env.FRONTEND_URL;
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://portfolio-frontend-za4s.onrender.com',
];
if (FRONTEND_URL && !allowedOrigins.includes(FRONTEND_URL)) allowedOrigins.push(FRONTEND_URL);
const corsOpts = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. Postman, server-to-server)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204,
  credentials: false,
};
app.use(cors(corsOpts));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection (required in production)
const isProduction = process.env.NODE_ENV === 'production';
const MONGODB_URI = process.env.MONGODB_URI || (isProduction ? null : 'mongodb://localhost:27017/portfolio');

if (!MONGODB_URI) {
  console.error('FATAL: MONGODB_URI is not set. Set it in .env or your production environment.');
  process.exit(1);
}

// Connect to MongoDB before accepting requests (avoids 500 on cold start / first request)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    startServer();
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Contact Message Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // If DB disconnected (e.g. after idle), reconnect once before save
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI);
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ 
      success: true, 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Error saving contact:', error.message || error);
    if (error.name) console.error('Error name:', error.name);
    if (error.code) console.error('Error code:', error.code);
    res.status(500).json({
      error: 'Failed to send message. Please try again.',
      ...(process.env.NODE_ENV !== 'production' && { detail: error.message }),
    });
  }
});

// Get all messages (for admin purposes)
app.get('/api/messages', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

function startServer() {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

