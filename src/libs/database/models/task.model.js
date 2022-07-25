export default (sequelize, types) => {
    return sequelize.define('tasks', {
        id: {
            type: types.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: types.STRING,
            allowNull: false,
        },
        description: {
            type: types.STRING,
            allowNull: false,
        },
        status: {
            type: types.ENUM,
            values: ['PENDING', 'DONE'],
            defaultValue: 'PENDING',
            allowNull: false,
        },
        delivery_date: {
            type:types.DATEONLY,
            allowNull: false,
        },
        comments: {
            type:types.STRING,
        },
        responsible:{
            type:types.STRING,
        },
        tags:{
            type:types.TEXT
        },
        user_id: {
            type: types.INTEGER,
            allowNull: false,
            references: {
              model: 'users',
              key: 'id',
            }
        }
        
    },
    {
        paranoid: true,
    });
};