const express = require('express');
const router = express.Router();
const controller = require('../controllers/projectController');

router.post('/', controller.createProject);
router.get('/', controller.getAllProjects);
router.get('/:id', controller.getProject);
router.put('/:id/manager', controller.assignManager);
router.put('/:id/employees', controller.assignEmployees);
router.put('/:id/release', controller.releaseProject);

module.exports = router;
