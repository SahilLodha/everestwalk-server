import {Sequelize} from 'sequelize'

console.log(process.env.DB_DIALECT)

/**
 * This is a Sequelize object created in order to reuse on various model and During database Connections and Migrations.
 *
 * @type {Sequelize}
 */
const sequelize = new Sequelize(
    `${process.env.DB_NAME}`,
    process.env.DB_USER_NAME,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST_DEV,
        dialect: process.env.DB_DIALECT
    }
);

export default sequelize;