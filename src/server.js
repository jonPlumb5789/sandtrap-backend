// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Authentication routes
const menuRoutes = require('./routes/menuRoutes'); // Public menu routes
const adminRoutes = require('./routes/adminRoutes'); // Admin CRUD routes for menu items

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Set up Express app
const app = express();
app.use(express.json()); // To parse JSON bodies

// Configure CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || '*', // Allow only frontend URL or all origins in development
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Failed to connect to MongoDB', err));

// Public routes
app.use('/api/auth', authRoutes); // Routes for /register and /login
app.use('/api/menu', menuRoutes); // Public menu route

// Admin routes (with authentication middleware)
app.use('/api/admin', adminRoutes); // Admin CRUD routes for menu items and categories

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
