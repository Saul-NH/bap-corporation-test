const bcrypt = require('bcrypt');
export default (sequelize, types) => {
    return sequelize.define('users', {
        id: {
            type: types.INTEGER,
            primaryKey: true,
            autoTncrement: true,
        },
        username: {
            type: types.STRING
        },
        email: {
            type: types.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: types.STRING,
            allowNull: false,
            set(value){
               this.setDataValue('password', bcrypt.hashSync(value, 10) );
            }
            
        },
        
    },
    {
        paranoid: true,
    });
};
