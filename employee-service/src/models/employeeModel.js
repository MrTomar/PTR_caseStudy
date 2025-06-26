
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    designation: String,
    status: { type: String, enum: ['active', 'terminated'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
