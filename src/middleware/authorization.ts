import type { Request, Response, NextFunction } from "express";
import type { statusError } from "../models.js";

export const authorize = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        const error = new Error(`can't fetch user data`) as statusError;
        error.status = 403;
        return next(error);
    }

    if (!req.user.email.match(/@company.com/i)) {
        const error = new Error(`employees only required`) as statusError;
        error.status = 403;
        return next(error);
    }

    next();
}