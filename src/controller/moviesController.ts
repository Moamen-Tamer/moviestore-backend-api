import type { Request, Response, NextFunction } from "express";
import type { Movie, statusError } from "../models.js";
import { movies } from "../database/db.js";

export const getMovies = (req: Request, res: Response, next: NextFunction) => {
    if (req.query.limit) {
        const limit = parseInt(req.query.limit as string);

        if (!limit) {
            const error = new Error(`invalid limit value`) as statusError;
            error.status = 400;
            return next(error);
        }

        return res.status(200).json(movies.slice(0, limit));
    }

    if (req.query.genre) {
        const genre = req.query.genre as string;

        if (!genre) {
            const error = new Error(`invalid genre value`) as statusError;
            error.status = 400;
            return next(error);
        }

        const filteredMovies = movies.filter((movie) => movie.genre === genre);

        return res.status(200).json(filteredMovies);
    }

    res.status(200).json(movies);
}

export const getMovie = (req: Request, res: Response, next: NextFunction) => {
    if (req.params.id) {
        const id = (req.params.id as string).startsWith("MO") ? (req.params.id as string) : `MO${req.params.id}`;

        if (!id) {
            const error = new Error(`invalid id value`) as statusError;
            error.status = 400;
            return next(error);
        }

        const movie = movies.find((movie) => movie.id === id);
        return res.status(200).json(movie);
    }

    if (req.params.title) {
        const title = req.params.title as string;

        if (!title) {
            const error = new Error(`invalid title value`) as statusError;
            error.status = 400;
            return next(error);
        }

        const movie = movies.find((movie) => movie.title === title);
        return res.status(200).json(movie);
    }

    res.status(400).json({ message: "invalid search value" });
}

export const availableMovies = (req: Request, res: Response, next: NextFunction) => {
    const available = movies.filter((movie) => movie.stockQuantity > 0 );

    if (!available) {
        return res.status(404).json(available);
    }

    res.status(200).json(available);
}

export const addMovie = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.id || !req.body.title || !req.body.genre || !req.body.releaseYear || !req.body.stockQuantity || !req.body.rentalPrice || !req.body.rating) {
        const error = new Error(`there's some invalid values`) as statusError;
        error.status = 400;
        return next(error);
    }

    const id = (req.body.id as string).startsWith("MO") ? (req.body.id as string) : `MO${req.body.id}`;

    const newMovie: Movie = {
        id,
        title: (req.body.title as string),
        genre: (req.body.genre as string),
        releaseYear: (req.body.releaseYear as string),
        stockQuantity: (req.body.stockQuantity as number),
        rentalPrice: (req.body.rentalPrice as number),
        rating: (req.body.rating as number),
    }

    movies.push(newMovie);
    res.status(200).json(newMovie);
}

export const editMovie = (req: Request, res: Response, next: NextFunction) => {
    const id = (req.params.id as string).startsWith("MO") ? (req.params.id as string) : `MO${req.params.id}`;
    const index = movies.findIndex((movie) => movie.id === id);

    if (index === -1) {
        const error = new Error(`invalid movie id values`) as statusError;
        error.status = 404;
        return next(error);
    }

    if (!req.body.stockQuantity && !req.body.rentalPrice && !req.body.rating) {
        const error = new Error(`invalid body value`) as statusError;
        error.status = 400;
        return next(error);
    }

    const editedMovie: Movie =  {
        ...movies[index],
        ...req.body
    }

    movies[index] = editedMovie;
    res.status(200).json(editedMovie);
}

export const deleteMovie = (req: Request, res: Response, next: NextFunction) => {
    const id = (req.params.id as string).startsWith("MO") ? (req.params.id as string) : `MO${req.params.id}`;
    const index = movies.findIndex((movie) => movie.id === id);

    if (index === -1) {
        const error = new Error(`invalid movie id values`) as statusError;
        error.status = 404;
        return next(error);
    }

    movies.splice(index, 1);
    res.status(200).json(movies);
}