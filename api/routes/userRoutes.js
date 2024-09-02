const express = require('express');
const router = express.Router();
const { createUser, login, getAllUsers, getaUser, details } = require("../controller/userCtrl"); // Corrected the typo in createUser

// Route to handle user signup with validation, password hashing, and file upload
router.post('/signup', createUser); // Corrected the typo here as well
router.post('/login', login);
router.get('/all', getAllUsers);
router.get('/:email', getaUser,);
router.get('/details', details);

module.exports = router;
