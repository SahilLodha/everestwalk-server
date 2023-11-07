import User from "../../model/User.model.js";

/**
 * Duplicate Email Middleware ...
 *
 * @param req
 * @param res
 * @aram next -> Express provided Function
 *
 * @summary
 * This function throws error in case same email is registered into the user table.
 */

const duplicateEmailMiddleware = async (req, res, next) => {
    try {
        const user = await User.findAll({where: {email: req.body.email}});
        if (user.length)
            throw new Error("Duplicate Email Detected.");
        next();
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to create user",
            data: null,
            err: err.message
        });
    }
}

export default duplicateEmailMiddleware;