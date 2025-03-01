const User = require('../models/User');
const multer = require("multer");
const path = require("path");

exports.searchUsers = async (req, res) => {
    try {
        const { query } = req.query;
        const users = await User.find({
            $or: [{ email: query }, { mobile: query }]
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
exports.updateUserStatus = async (req, res) => {
    try {
        const { userId, isOnline } = req.body;
        await User.findByIdAndUpdate(userId, { isOnline });
        res.json({ message: 'User status updated' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

