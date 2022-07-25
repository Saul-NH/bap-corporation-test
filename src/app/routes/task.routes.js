import { Router } from 'express';
import TaskController from '../controllers/TaskController';
import {createTaskSchema} from '../middlewares/validators/task.validators.js';

const validator = require('express-joi-validation').createValidator({})
const taskController = new TaskController();

const router = Router();
    
router.get('/', taskController.getTasks);

router.get('/:id', taskController.getTaskById);

router.post('/',validator.body(createTaskSchema), taskController.createTask);

router.put('/:id', taskController.updateTaskById);

router.delete('/:id', taskController.deleteTaskById);

export default router;
