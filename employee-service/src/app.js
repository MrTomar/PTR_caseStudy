const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Route middleware
app.use('/employees', employeeRoutes);

// Debug: Check environment variables
console.log('🌍 Connecting to MongoDB at:', process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 3000, () => {
        console.log(`🚀 Employee service running on port ${process.env.PORT || 3000}`);
    });
})
.catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
});
