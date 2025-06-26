const express = require('express');
const router = express.Router();
const controller = require('../controllers/employeeController');

router.post('/', controller.createEmployee);
router.get('/', controller.getAllEmployees);
router.get('/:id', controller.getEmployee);
router.put('/:id/terminate', controller.terminateEmployee);
router.delete('/:id', controller.deleteEmployee);

module.exports = router;
