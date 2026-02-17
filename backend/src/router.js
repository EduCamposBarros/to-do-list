const express = require('express');

const taskControllers = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', taskControllers.getAll);
router.post('/tasks', tasksMiddleware.validateFieldTitle, taskControllers.createTask);
router.delete('/tasks/:id', taskControllers.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateFieldTitle, tasksMiddleware.validateFieldStatus, taskControllers.updateTask);

module.exports = router;