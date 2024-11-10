// src/routes/menuRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken'); // Import jwt
const router = express.Router();
const menuController = require('../controllers/menuController');

const JWT_SECRET = process.env.JWT_SECRET || 'thesandtrap734!';

// In authenticateToken middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log("No token provided");
    return res.status(403).json({ message: 'Token not provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      console.log("Invalid token:", err);
      return res.status(403).json({ message: 'Invalid token' });
    }
    console.log("Token verified for user:", user);
    req.user = user;
    next();
  });
};

// Public route to fetch all menu items
router.get('/', menuController.getMenuItems);

// Protected admin routes
router.post('/admin/menu', authenticateToken, menuController.addMenuItem);
router.put('/admin/menu/:id', authenticateToken, menuController.updateMenuItem);
router.delete('/admin/menu/:id', authenticateToken, menuController.deleteMenuItem);

module.exports = router;
