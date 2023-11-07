import {body, validationResult} from "express-validator";

/**
 * @type {(ValidationChain|any)[]}
 *
 * @summary
 * This is created in order to have proper request validation during creation of the user.
 */
const userCreateValidator = [
    body("first_name").notEmpty().withMessage("First name is required.").trim().isString(),
    body("last_name").notEmpty().withMessage("Last name is required.").trim().isString(),
    body("email").notEmpty().withMessage("Email is required.").isEmail().trim().isString(),
    body("password")
        .notEmpty().withMessage("Password is Required")
        .isLength({min: 8}).withMessage("Password must have at-least 8 characters.")
        .matches("(?=.*[0-9])+").withMessage("Password must contain at-least one digit")
        .matches("(?=.*[a-z])+").withMessage("Password must contain at-least one lowercase letter")
        .matches("(?=.*[A-Z])+").withMessage("Password must contain at-least one uppercase letter")
        .matches("(?=.*[-+_!@#$%^&*.,?])+").withMessage("Password must contain at-least one special character"),
    body("phone_number")
        .exists({checkNull: true}).withMessage("Phone Number is required").trim()
        .isLength({
            min: 7,
            max: 15,
        }).withMessage("Between 7 to 15 characters."),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({
                success: false,
                message: "Validation error occurred.",
                data: {},
                error: errors.array()
            });
        }
        next();
    },
]

export default userCreateValidator;