import express from "express";
import { addMovie, availableMovies, deleteMovie, editMovie, getMovie, getMovies } from "../controller/moviesController.js";
import { authorize } from "../middleware/authorization.js";
import { authenticateToken } from "../middleware/authentication.js";


const movies = express.Router();

movies.use(authenticateToken);

movies.get('/', getMovies);
movies.get('/available', availableMovies);
movies.get('/:id', getMovie);
movies.get('/:title', getMovie);
movies.post('/', authorize, addMovie);
movies.patch('/:id', authorize, editMovie);
movies.put('/:id', authorize, editMovie);
movies.delete('/:id', authorize, deleteMovie);

export default movies;