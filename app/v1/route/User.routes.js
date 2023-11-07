/**
 * Duplicate Email Detection
 *
 * @summary
 * This file contains the middleware for the duplicate email detection.
 */

import {Router} from "express";
import {
    getUser,
    getUsers,
    editUser,
    removeUser,
    createUser
} from "../controller/User.controller.js";

import duplicateEmailMiddleware from '../middlewares/UserMiddlewares/DuplicateEmail.js'

const UserRouter = Router();

UserRouter.route('/').get(getUsers).post(duplicateEmailMiddleware, createUser);
UserRouter.route("/:id").get(getUser).delete(removeUser).put(editUser);

export default UserRouter;