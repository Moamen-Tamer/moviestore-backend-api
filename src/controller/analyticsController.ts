import type { Request, Response, NextFunction } from "express";
import { movies } from "../database/db.js";

export const highestRating = (req: Request, res: Response, next: NextFunction) => {
    const topThreeMovies = [...movies].sort((a, b) => b.rating - a.rating)
                                      .slice(0, 3);

    res.status(200).json(topThreeMovies);
}

export const lowestRating = (req: Request, res: Response, next: NextFunction) => {
    const lowestThreeMovies = [...movies].sort((a, b) => a.rating - b.rating)
                                         .slice(0, 3);

    res.status(200).json(lowestThreeMovies);
}

export const popular = (req: Request, res: Response, next: NextFunction) => {
    const topThreeMovies = [...movies].sort((a, b) => b.stockQuantity - a.stockQuantity)
                                      .slice(0, 3);

    res.status(200).json(topThreeMovies);
}

export const unpopular = (req: Request, res: Response, next: NextFunction) => {
    const lowestThreeMovies = [...movies].sort((a, b) => a.stockQuantity - b.stockQuantity)
                                         .slice(0, 3);

    res.status(200).json(lowestThreeMovies);
}