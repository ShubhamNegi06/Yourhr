const User = require("../models/users");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const upload = require('../middleware/multer');

// Input validation rules
const userValidationRules = [
  body('email').isEmail().withMessage('Enter a valid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').isMobilePhone().withMessage('Enter a valid phone number'),
];

const createUser = async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation Errors:', errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { firstName, lastName, email, password, address, city, state, zip, phone, role, agreedToTerms } = req.body;

    console.log('Received Data:', req.body);
    console.log('File Info:', req.file);

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      address,
      city,
      state,
      zip,
      phone,
      role,
      file: req.file ? {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
        data: req.file.buffer
      } : null, // Save the file buffer to the database
      agreedToTerms
    });

    console.log('New User:', newUser);

    // Save the user to the database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const loginValidationRules = [
  body('email').isEmail().withMessage('Enter a valid email address'),
  body('password').exists().withMessage('Password is required'),
];

const login = async (req, res) => {
  // Handle validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Respond with success message
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllUsers= async (req, res) => { 
    try {
      const users = await User.find().select('-password -file.data');
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
module.exports = {
  createUser: [upload.single('file'), userValidationRules, createUser],
  login: [loginValidationRules, login],
  getAllUsers
};
 