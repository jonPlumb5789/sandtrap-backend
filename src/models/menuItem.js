// src/models/menuItem.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  category: String,
  name: String,
  description: String,
  price: String,
  add_ons: [{ name: String, price: String }],
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
