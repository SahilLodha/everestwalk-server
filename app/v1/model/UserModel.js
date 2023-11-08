import Bcrypt from 'bcrypt';
import {DataTypes, Model} from "sequelize";
import {sequelize} from "../config/DatabaseConfig.js";

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
        validate: {
            isEmail: {
                msg: "Not a valid Email."
            }
        },
        unique: false
    },
    phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [7, 15]
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        show: false
    }
}, {
    sequelize,
    modelName: 'User',
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['password'] },
    },
    scopes: {
        emailPassword: {
            attributes: { include: ['password', 'email']},
        }
    },
    hooks: {
        beforeCreate: async (user, options) => {
            try{
                const salt = await Bcrypt.genSalt(Number(process.env.SALT_VALUE));
                user.password = await Bcrypt.hash(user.password, salt);
            } catch (err) {
                throw new Error(err.message);
            }
        },
        beforeUpdate: async (user, options) => {
            try{
                if (user.password) {
                    const salt = await Bcrypt.genSalt(Number(process.env.SALT_VALUE));
                    user.password = await Bcrypt.hash(user.password, salt);
                }
            } catch (err) {
                throw new Error(err.message);
            }
        }
    }
});

export default User;