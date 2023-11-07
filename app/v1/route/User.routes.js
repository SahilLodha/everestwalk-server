import {Router} from "express";
import {
    getUser,
    getUsers,
    editUser,
    removeUser,
    createUser
} from "../controller/User.controller.js";

const UserRouter = Router();

UserRouter.route('/').get(getUsers).post(createUser);
UserRouter.route("/:id").get(getUser).delete(removeUser).put(editUser);

export default UserRouter;