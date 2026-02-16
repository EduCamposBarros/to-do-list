const express = require('express');

const taskControllers = require('./controllers/tasksController');

const router = express.Router();

router.get('/tasks', taskControllers.getAll);
router.post('/tasks', taskControllers.createTask);

module.exports = router;