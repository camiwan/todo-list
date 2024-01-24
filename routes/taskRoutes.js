const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/tasks', taskController.getAllTasks);
router.post('/tasks', taskController.addTask);
//router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
//router.put('/tasks/:id/start-timer', taskController.startTimer);
//router.put('/tasks/:id/stop-timer', taskController.stopTimer);

module.exports = router;
