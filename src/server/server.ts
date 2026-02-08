import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import movies from '../routes/movies.js';
import auth from '../routes/auth.js';
import analytics from '../routes/analytics.js';
import rentals from '../routes/rentals.js';
import { errorHandler } from '../middleware/error.js';
import { notFound } from '../middleware/notFound.js';
import { logger } from '../middleware/logger.js';
import { limiter } from '../middleware/limiter.js';

const app = express();
const PORT = process.env.PORT || 8000;

// body parser middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// general middlewares
app.use(helmet());
app.use(logger);

// limiters
app.use(limiter);

// routes middlewares
app.use('/api/movies', movies);
app.use('/api/auth', auth);
app.use('/api/analytics', analytics);
app.use('/api/rentals', rentals);

// error handlers
app.use(notFound);
app.use(errorHandler);

// server
app.listen(PORT, () => console.log(`server is currently running on port ${PORT}`));