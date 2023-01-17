import { Sequelize } from 'sequelize';

class SequelizeCore {

    sequelizeEngine: Sequelize;

    constructor()
    {
        this.sequelizeEngine = new Sequelize({
            dialect     : 'mssql',
            host        : '0.0.0.0',
            port        : 6603,
            username    : 'root',
            password    : 'toor',
            database    : 'convicti'
        });
    }

    getDatabase() : Sequelize
    {
        return this.sequelizeEngine;
    }

}

export default new SequelizeCore();
