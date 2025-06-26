// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('../config/db');
const authRoutes = require('./routes/authRoutes');

connectDB();
app.use(express.json());
app.use('/api/v1/auth/user', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Auth service running on port ${PORT}`));
