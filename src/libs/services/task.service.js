import { Task } from '../database/database';
class taskService {
    constructor() {}

    async getAllTasks(user_id) {
        try {
            const tasks = await Task.findAll({
                where: {
                    user_id: user_id,
                },
                attributes: ['id','title','description','status','delivery_date','responsible'],

            });
            return tasks;
        } catch (error) {
            console.error(error);
            throw 'Get all tasks failed';
        }
    }

    async getTaskById(task_id) {
        try {
            const task = await Task.findByPk(task_id,{ attributes: { exclude: ['user_id'] } });

            return task;
        } catch (error) {
            console.error(error);
            throw 'Get task by id failed';
        }
    }

    async createTask(task, user_id) { 
        try {
            task.user_id = user_id;
            task.tags = JSON.stringify(task.tags)
            const newTask = await Task.create(task)
            return newTask;
            
        } catch (error) {
            console.error(error);
            throw 'Create task failed';
        }
    }

    async findByIdAndDelete(task_id){
        try {
            const deletedTask = await Task.destroy({where: {id:task_id}});
            return deletedTask;
        } catch (error) {
            console.error(error);
            throw 'Delete task failed';
        }
    }

    async findByIdAndUpdate(newTask,task_id){
        try {
            const task = await Task.findByPk(task_id);
            
            if (!task) {
                return 'task not found'
            }else{
                newTask.id = task_id
                newTask.tags = JSON.stringify(newTask.tags)
                const updatedTask = await Task.upsert(newTask);
                console.log('updated:', updatedTask);
                return updatedTask;
            }

            
        } catch (error) {
            console.error(error);
            throw 'Update task failed';
        }
    }
}

export default taskService;
