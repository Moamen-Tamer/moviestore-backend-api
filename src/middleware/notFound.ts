import type { Request, Response, NextFunction } from "express";
import type { statusError } from "../models.js";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error(``) as statusError;
    error.status = 404;
    return next(error);
}