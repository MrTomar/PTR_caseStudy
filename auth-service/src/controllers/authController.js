// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  console.log("Login input password:", password);
  console.log("Stored hash:", user.password);
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

  const payload = {
    id: user._id,
    role: user.role,
    companyId: user.companyId
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};

// controllers/authController.js
exports.createUser = async (req, res) => {
    try {
      const { name, email, password, role, companyId } = req.body;
  
      // Check for existing user
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
      // Hash password
      //const hashedPassword = await bcrypt.hash(password, 12);
  
      // Create user
      const user = await User.create({
        name,
        email,
        password,
        role,
        companyId
      });
  
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find({}, '-password'); // exclude password
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  };
  
