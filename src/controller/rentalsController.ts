import type { Request, Response, NextFunction } from "express";
import { customers, movies } from "../database/db.js";
import type { statusError } from "../models.js";

export const myRentals = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        const error = new Error(`can't fetch user data`) as statusError;
        error.status = 401;
        return next(error);
    }

    const customer = customers.find((c) => c.id === req.user.id);
    
    if (!customer) {
        const error = new Error(`customer not found`) as statusError;
        error.status = 404;
        return next(error);
    }

    res.status(200).json(customer.rentals);
}

export const overdue = (req: Request, res: Response, next: NextFunction) => {
    const now = new Date();
    let overdueMovies = customers.flatMap((customer) => {
        return customer.rentals.filter((rental) => {
            if (!rental.returnDate && rental.dueDate < now) {
                return true;
            }

            if (rental.returnDate && rental.dueDate < rental.returnDate) {
                return true;
            }

            return false;
        })
    });

    res.status(200).json(overdueMovies);
}

export const returnMovie = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        const error = new Error(`authentication required`) as statusError;
        error.status = 401;
        return next(error);
    }

    // ✅ Get the actual customer from database
    const customer = customers.find((c) => c.id === req.user.id);
    
    if (!customer) {
        const error = new Error(`customer not found`) as statusError;
        error.status = 404;
        return next(error);
    }

    const movieId = (req.params.id as string).startsWith("MO") ? req.params.id : `MO${req.params.id}`;
    
    const rentalIndex = customer.rentals.findIndex(
        (rental) => rental.movieId === movieId && !rental.returnDate
    );
    
    if (rentalIndex === -1) {
        const error = new Error(`no active rental found for this movie`) as statusError;
        error.status = 404;
        return next(error);
    }

    const rental = customer.rentals[rentalIndex];

    if (!rental) {
        const error = new Error(`rental data corrupted`) as statusError;
        error.status = 500;
        return next(error);
    }
    
    const movie = movies.find((movie) => movie.id === rental.movieId);
    
    if (!movie) {
        const error = new Error(`movie not found`) as statusError;
        error.status = 404;
        return next(error);
    }

    rental.returnDate = new Date();
    movie.stockQuantity++;

    res.status(200).json({ 
        message: `movie "${movie.title}" has been returned`,
        rental 
    });
}

export const rentMovie = (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
        const error = new Error(`authentication required`) as statusError;
        error.status = 401;
        return next(error);
    }

    const movieId = (req.params.id as string).startsWith("MO") ? req.params.id : `MO${req.params.id}`;
    const movie = movies.find((m) => m.id === movieId);
    
    if (!movie) {
        const error = new Error(`movie not found`) as statusError;
        error.status = 404;
        return next(error);
    }

    if (movie.stockQuantity <= 0) {
        const error = new Error(`movie is not available`) as statusError;
        error.status = 400;
        return next(error);
    }

    const customer = customers.find((c) => c.id === req.user.id);
    
    if (!customer) {
        const error = new Error(`customer not found`) as statusError;
        error.status = 404;
        return next(error);
    }

    if (customer.status === 'blocked') {
        const error = new Error(`account is blocked`) as statusError;
        error.status = 403;
        return next(error);
    }

    const existingRental = customer.rentals.find(
        r => r.movieId === movie.id && !r.returnDate
    );
    
    if (existingRental) {
        const error = new Error(`you already have this movie rented`) as statusError;
        error.status = 400;
        return next(error);
    }

    const allRentalIds = customers
        .flatMap(c => c.rentals)
        .map(r => parseInt(r.id.replace('RE', '')))
        .filter(id => !isNaN(id));
    
    const lastRentalId = allRentalIds.length > 0 ? Math.max(...allRentalIds) : 0;

    const newRental = {
        id: `RE${lastRentalId + 1}`,
        customerId: req.user.id,
        movieId: movie.id,
        rentalDate: new Date(),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        price: movie.rentalPrice
    };

    customer.rentals.push(newRental);
    movie.stockQuantity--;

    res.status(201).json({
        message: `successfully rented "${movie.title}"`,
        rental: newRental
    });
}