const express = require('express');
const { addMenuItem, updateMenuItem, deleteMenuItem, getMenuItems } = require('../controllers/menuController');
const authenticateAdmin = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new menu item (admin only)
router.post('/menu', authenticateAdmin, addMenuItem);

// Update an existing menu item (admin only)
router.put('/menu/:id', authenticateAdmin, updateMenuItem);

// Delete a menu item (admin only)
router.delete('/menu/:id', authenticateAdmin, deleteMenuItem);

// Get all menu items - you might not need this here if it's only a public route
router.get('/menu', getMenuItems);

module.exports = router;
