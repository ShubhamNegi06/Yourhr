// middleware/multer.js
const multer = require('multer');

// Configure multer for file uploads, storing files in memory
const storage = multer.memoryStorage(); // Store file in memory as a Buffer

const upload = multer({ storage: storage });

module.exports = upload;
