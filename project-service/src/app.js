const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const projectRoutes = require('./routes/projectRoutes');

const app = express();

app.use(express.json());
app.use('/projects', projectRoutes);

console.log('🌍 Connecting to MongoDB at:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(process.env.PORT || 3001, () => {
        console.log(`🚀 Project service running on port ${process.env.PORT || 3001}`);
    });
})
.catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
});
