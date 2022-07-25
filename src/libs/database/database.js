import Sequelize from 'sequelize';
import config from 'config';
import UserModel from './models/user.model';
import TaskModel from './models/task.model';
import userSeeder from './seeders/userSeeder';

const sequelize = new Sequelize(
    config.get('database.name'),
    config.get('database.username'),
    config.get('database.password'),
    {
        host: config.get('database.hostname'),
        dialect: config.get('database.dialect'),
    }
);
console.log('Database is connected');


const User = UserModel(sequelize, Sequelize);
const Task = TaskModel(sequelize, Sequelize);

sequelize.sync({ force: true }).then(async() => {
    try {
        console.log('Tables synchronized');
        await userSeeder(User);
        
    } catch (error) {
        console.error(error);   
    }

});

export {
    User,
    Task
}