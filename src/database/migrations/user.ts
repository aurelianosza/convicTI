import {  INTEGER, STRING } from 'sequelize';
import sequelizeCore from '../../core/database';

sequelizeCore.getDatabase().define('users', {
    id : {
        type            : INTEGER,
        autoIncrement   : true,
        allowNull       : false,
        primaryKey      : true
    },
    name: {
        type            : STRING,
        allowNull       : false,
    },
    email : {
        type            : STRING,
        allowNull       : false,
    },
    password : {
        type            : STRING,
        allowNull       : false
    }
});
