import TaskService from '../../libs/services/task.service';
const taskService = new TaskService();
    
class TaskController {
    /*******************/
    /**** GET TASKS ****/
    /*******************/

    async getTasks(req, res) {
        try {
            const tasks = await taskService.getAllTasks(req.user_id);
            if (tasks.length == 0) {
                return res.json('Tasks not found');
            }
            return res.json(tasks);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    }

    /********************/
    /** GET TASK BY ID **/
    /********************/
    async getTaskById(req, res) {
        try {
            const task = await taskService.getTaskById(req.params.id);
            if (!task) {
                return res.status(404).json({
                    message: 'Task not found',
                });
            }
            return res.status(200).json({
                task,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    }

    /********************/
    /*** CREATE TASKS ***/
    /********************/
    async createTask(req, res) {
        try {
            const newTask = await taskService.createTask(req.body, 1);

            res.status(201).json({
                message: 'Task created',
                task: newTask,
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    }

    /********************/
    /*** DELETE TASKS ***/
    /********************/
    async deleteTaskById(req, res) {
        try {
            const deletedTask = await taskService.findByIdAndDelete(
                req.params.id
            );
            if (deletedTask != 1) {
                return res.status(404).json({
                    message: 'Task not found',
                });
            }

            res.status(200).json({
                message: 'Task deleted successfully',
            });
        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    }

    /********************/
    /* UPDATE TASK BY ID /
    /********************/
    async updateTaskById(req, res) {
        try {
            const updatedTask = await taskService.findByIdAndUpdate(
                req.body,
                req.params.id
            );
            if (typeof updatedTask === 'string') {
                return res.status(404).json({ message: updatedTask });
            }
            res.status(200).json({
                message: 'Task Updated seccessfully',
            });
        } catch (error) {
            res.status(500).json({
                message: 'Something went wrong',
            });
        }
    }
}

export default TaskController;
