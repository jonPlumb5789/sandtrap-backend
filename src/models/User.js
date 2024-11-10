const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.comparePassword = function (inputPassword) {
    return bcrypt.compare(inputPassword, this.password);
  };
  

module.exports = mongoose.model('User', userSchema);
