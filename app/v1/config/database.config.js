import {Sequelize} from 'sequelize'


/**
 * This is a Sequelize object created in order to reuse on various model and During database Connections.
 *
 * @type {Sequelize}
 */
const sequelize = new Sequelize(
    `${process.env.DB_NAME}`,
    process.env.DB_USER_NAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST_DEV,
        dialect: "mysql",
        logging: function () {
        },
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        dialectOptions: {
            socketPath: "/var/run/mysqld/mysqld.sock"
        },
        define: {
            paranoid: true
        }
    });

export default sequelize;