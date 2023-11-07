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
} from "../controller/UserController.js";

// Importing user middlewares
import {
    duplicateEmailMiddleware,
    userCreateValidator,
    userUpdateValidator
} from "../middlewares/UserMiddlewares/index.js";


const UserRouter = Router();

UserRouter.route('/').get(getUsers).post(duplicateEmailMiddleware, userCreateValidator, createUser);
UserRouter.route("/:id").get(getUser).delete(removeUser).put(userUpdateValidator, editUser);

export default UserRouter;