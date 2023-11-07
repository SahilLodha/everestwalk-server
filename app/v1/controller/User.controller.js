import {Op} from 'sequelize'
import {User} from "../model/index.js";

/**
 * Fetch Users Function.
 *
 * @param req
 * @param res
 * @returns {User}
 *
 * @summary
 * Returns all the user present in the database.
 */
export const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({
            success: true,
            message: "Users fetch successful.",
            data: users,
            error: {}
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "User cannot be fetched.",
            data: null,
            error: err.message
        });
    }
}

/**
 * Store User
 *
 * @param req
 * @param res
 * @returns {*}
 *
 * @summary
 * Checks for Validation and creates a user based on values in req.body.
 */
export const createUser =  async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(201).json({
            success: true,
            message: "User creation successful.",
            data: user,
            error: {}
        });
    } catch (err) {
        return res.status(409).json({
            success: false,
            message: "User cannot be created.",
            data: null,
            error: err.message
        });
    }
}

export const removeUser = async (req, res) => {
    try{
        const user = await User.findByPk(req.params.id);
        await user.destroy();
        return res.status(200).json({
            success: true,
            message: "User removal successful.",
            data: user,
            error: null
        });
    } catch (err) {
        return res.status(400).json({
            success: false,
            message: "User cannot be removed.",
            data: null,
            error: err.message
        });
    }

}

export const editUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        await user.update(req.body)
        return res.status(200).json({
            success: true,
            message: "User edit successful.",
            data: user,
            error: null
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            message: "User cannot be edited.",
            data: null,
            error: err.message
        });
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id)
        return res.status(200).json({
            success: true,
            data: user,
            message: "User fetch successful.",
            error: null
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            data: null,
            message: "User cannot be fetched.",
            error: err.message
        });
    }
}