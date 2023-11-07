import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config.js";

class User extends Model {}

/**
 * User Model Constructor
 *
 * @summary
 * Contains the table structure for the created for the CRUD Operations with some schema level validations applied.
 */
User.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false

    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: true,
        len: [7, 15]
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [8, 20]
    }
}, {
    sequelize,
    modelName: 'User'
});

export default User;