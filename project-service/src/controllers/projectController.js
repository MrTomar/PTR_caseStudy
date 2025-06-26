const Project = require('../models/projectModel');

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.assignManager = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { manager: req.body.manager },
            { new: true }
        );
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json({ message: 'Manager assigned', project });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.assignEmployees = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { employees: { $each: req.body.employees } } },
            { new: true }
        );
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json({ message: 'Employees assigned', project });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.releaseProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(
            req.params.id,
            { status: 'released' },
            { new: true }
        );
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json({ message: 'Project released', project });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
