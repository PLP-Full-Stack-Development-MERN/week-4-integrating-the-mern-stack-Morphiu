const express = require('express');
const router = express.Router();
const {getTasks, createTask, updateTask, deleteTask, getTasksById} = require('../controllers/taskController.js');

// Creating route for getting tasks
router.get('/', getTasks);
router.get('/:id', getTasksById);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask)


module.exports = router;