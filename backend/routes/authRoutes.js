const express = require('express');
const { register, login } = require('../controllers/authController');
const upload = require('../middleware/upload');
const router = express.Router();

// Use multer to handle file upload for 'image'
router.post('/register', upload.single('image'), register);
router.post('/login', login);

module.exports = router;
