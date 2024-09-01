const User = require("../models/users");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const upload = require('../middleware/multer');

const userValidationRules = [
    body('email').isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('phone').isMobilePhone().withMessage('Enter a valid phone number'),
  ];

  upload.single('file'), // Handle single file upload
  userValidationRules, // Input validation rules
  async (req, res) => {
    // Handle validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation Errors:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { firstName, lastName, email, password, address, city, state, zip, phone, agreedToTerms } = req.body;

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
  }