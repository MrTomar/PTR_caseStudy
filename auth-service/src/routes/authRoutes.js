// routes/authRoutes.js
const express = require('express');
const { login, createUser, getAllUsers } = require('../controllers/authController');
const router = express.Router();

router.post('/login', login);
router.post('/create-user', createUser); // Changed route path too
router.get('/users', getAllUsers);  // ⬅️ new route


module.exports = router;
