const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const upload = require('../middleware/multer'); // Import the multer configuration

// Validation rules
const userValidationRules = [
  body('email').isEmail().withMessage('Enter a valid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('phone').isMobilePhone().withMessage('Enter a valid phone number'),
];

// Route to handle user signup with validation, password hashing, and file upload
router.post(
  '/signup',
  upload.single('file'), // Handle single file upload
  userValidationRules, // Input validation rules
  async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password, address, address2, city, state, zip, phone, altPhone, agreedToTerms } = req.body;

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
        file: req.file ? {
          filename: req.file.originalname,
          contentType: req.file.mimetype,
          data: req.file.buffer
        } : null, // Save the file buffer to the database
        agreedToTerms
      });

      // Save the user to the database
      await newUser.save();

      // Respond with success message
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// Route to handle user login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').exists().withMessage('Password is required'),
  ],
  async (req, res) => {
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
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

// app.get('/file/:id', async (req, res) => {
//   try {
//     const file = await File.findById(req.params.id);
//     res.contentType(file.contentType);
//     res.send(file.data);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(404).send('File not found');
//   }
// });

module.exports = router;
