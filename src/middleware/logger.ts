import type { Request, Response, NextFunction } from "express";
import colors from 'colors';

export const logger = (req: Request, res: Response, next: NextFunction) => {
    const methodColor: Record<string, string> = {
        GET: "green",
        POST: "blue",
        PATCH: "magenta",
        PUT: "yellow",
        DELETE: "red"
    };

    const color: any = methodColor[req.method] || "white";

    console.log(
        `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`[color]
    );

    next();
}