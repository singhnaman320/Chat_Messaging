const express = require('express');
const { searchUsers, updateUserStatus, getAllUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

router.get('/search', searchUsers);
router.put('/status', updateUserStatus);
router.get('/all', getAllUsers);
router.get('/:userId', getUserById);

module.exports = router;