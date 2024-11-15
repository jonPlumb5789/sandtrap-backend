// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config({ path: './.env' });

// Set up Express app
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 10000;

// Connect to MongoDB with increased timeout
mongoose.connect(process.env.MONGO_URI, {
  connectTimeoutMS: 30000, // 30 seconds for initial connection
  serverSelectionTimeoutMS: 60000, // 60 seconds to find a MongoDB server
  socketTimeoutMS: 45000, // 45 seconds for socket operations
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Public routes
app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);

// Admin routes (with authentication middleware)
app.use('/api/admin', adminRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
