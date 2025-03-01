const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
      const { name, email, mobile, password } = req.body;
      const user = new User({ name, email, mobile, password});
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Register Error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };  

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
