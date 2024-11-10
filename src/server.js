// Import dependencies
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const menuRoutes = require('./routes/menuRoutes');
const adminRoutes = require('./routes/adminRoutes');
const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection URI
const uri = "mongodb+srv://jonplumb89:KEXeUDnC9Lo5kxLG@the-sandtrap.rzuyf.mongodb.net/?retryWrites=true&w=majority&appName=the-sandtrap";


// Set up Express app
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    // Public routes
    app.use('/api/auth', authRoutes);
    app.use('/api/menu', menuRoutes);

    // Admin routes (with authentication middleware)
    app.use('/api/admin', adminRoutes);

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
}

connectToMongoDB().catch(console.error);
