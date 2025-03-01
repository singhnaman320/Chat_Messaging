const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    try {
        const { sender, receiver, content } = req.body;
        if (req.user.id !== sender) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        const message = new Message({ sender, receiver, content });
        await message.save();
        res.status(201).json({ message: 'Message sent' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


exports.getMessages = async (req, res) => {
    try {
        const { chatUserId } = req.params;
        const userId = req.user.id; // Authenticated user

        if (!userId) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        const messages = await Message.find({
            $or: [
                { sender: userId, receiver: chatUserId },
                { sender: chatUserId, receiver: userId }
            ]
        }).sort({ createdAt: 1 }) // Sort messages in chronological order
          .populate('sender receiver');

        res.json(messages);
    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({ error: 'Server error' });
    }
};


// (Another method to get user msgs)
exports.getMessagesFromUser = async (req, res) => {
    try {
        const { userId, selectedUserId } = req.params;

        if (req.user.id !== userId) {
            return res.status(403).json({ error: 'Unauthorized' });
        }

        const messages = await Message.find({
            sender: selectedUserId,
            receiver: userId
        }).populate('sender receiver');

        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
