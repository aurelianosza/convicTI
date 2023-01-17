import { Model, DataTypes } from "sequelize";
import sequelizeCore from '../core/database';

export class User extends Model {

	static readonly DEFAULT_PASSWORD = '123mudar';

	password: string;

}

User.init({
	id : {
		type            : DataTypes.INTEGER,
		autoIncrement   : true,
		allowNull       : false,
		primaryKey      : true
	},
	name: {
		type            : DataTypes.STRING,
		allowNull       : false,
	},
	role: {
		type            : DataTypes.STRING,
		allowNull		: false
	},	
	email : {
		type            : DataTypes.STRING,
		allowNull       : false,
	},
	password : {
		type            : DataTypes.STRING,
		allowNull       : false
	}
}, {
	sequelize		: sequelizeCore.getDatabase(),
	modelName		: 'User',
	timestamps		: true
});
