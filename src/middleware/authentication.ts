import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { statusError } from "../models.js";
import { accessKey } from "../controller/authController.js";
import { body, validationResult } from "express-validator";

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.accessToken;

    if (!token) {
        const error = new Error(`access denied, please log in first`) as statusError;
        error.status = 400;
        return next(error);
    }

    jwt.verify(token, accessKey, (err: any, user: any) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                const error = new Error(`token expired, please log in again`) as statusError;
                error.status = 400;
                return next(error);
            }
            
            const error = new Error(`invalid token`) as statusError;
            error.status = 401;
            return next(error);
        }

        req.user = user;
        next();
    })
}

export const validateRegisterData = [
    body('name').trim()
                .escape()
                .isLength({ min: 3, max: 20 })
                .withMessage(`username must be 3-20 characters`)
                .matches(/^[a-zA-Z0-9_]+$/)
                .withMessage(`username can only contain letters (upper or lower), numbers, and undeerscores`),

    body('gender').trim()
                  .notEmpty()
                  .withMessage(`gender is required`),

    body('email').trim()
                 .isEmail()
                 .withMessage(`invalid email address`)
                 .normalizeEmail(),

    body('password').trim()
                    .notEmpty()
                    .withMessage(`password is requires`)
                    .isLength({ min: 5, max: 35 })
                    .withMessage(`password mus be 5-35 characters`),
                    
    body('phone').trim()
                 .notEmpty()
                 .withMessage(`phone number is required`)
                 .isNumeric()
                 .withMessage(`phone number must contain only digits`)
];

export const validateLoginData = [
    body('email').trim()
                 .isEmail()
                 .withMessage(`invalid email address`)
                 .normalizeEmail(),

    body('password').trim()
                    .notEmpty()
                    .withMessage(`password is requires`)
                    .isLength({ min: 5, max: 35 })
                    .withMessage(`password mus be 5-35 characters`)
];

export const validationHandler = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}