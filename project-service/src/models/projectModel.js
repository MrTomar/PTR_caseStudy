const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    assignedTo: String, // Employee ID (optional)
    status: { type: String, enum: ['pending', 'in-progress', 'completed'], default: 'pending' },
}, { timestamps: true });

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    status: { type: String, enum: ['created', 'released', 'closed'], default: 'created' },
    manager: String,
    employees: [{ type: String }], // Employee IDs assigned
    tasks: [taskSchema],            // 👈 New: Array of embedded Task documents
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

module.exports = Project;
