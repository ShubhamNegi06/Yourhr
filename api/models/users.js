// models/users.js
const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  firstName: {type: String,  required: true},
  lastName: {type: String,   required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number },
  phone: { type: Number, required: true, unique: true },
  role: { type: String, required: true },
  file: {
    filename: String,
    contentType: String,
    data: Buffer,
  },
  agreedToTerms: { type: Boolean, default: false }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
