const MenuItem = require('../models/menuItem');

// Fetch all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find(req.body);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new menu item
exports.addMenuItem = async (req, res) => {
  const menuItem = new MenuItem(req.body);
  try {
    const newItem = await menuItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing menu item
exports.updateMenuItem = async (req, res) => {
  try {
    const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    await MenuItem.findByIdAndDelete(req.params.id);
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
