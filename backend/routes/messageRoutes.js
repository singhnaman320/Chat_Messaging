const express = require('express');
const { sendMessage, getMessages, getMessagesFromUser } = require('../controllers/messageController');
const router = express.Router();
router.post('/send', sendMessage);
router.get('/:chatUserId', getMessages);

// Another method to get messages (Not in use here)
router.get('/:userId/:selectedUserId', getMessagesFromUser);
module.exports = router;