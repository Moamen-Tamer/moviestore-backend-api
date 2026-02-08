import express from "express";
import { myRentals, overdue, rentMovie, returnMovie } from "../controller/rentalsController.js";
import { authorize } from "../middleware/authorization.js";
import { authenticateToken } from "../middleware/authentication.js";

const rentals = express.Router();

rentals.use(authenticateToken);

rentals.get('/my-rentals', myRentals);
rentals.get('/overdue', authorize, overdue);
rentals.post('/:id/return', returnMovie);
rentals.post('/:id/rent', rentMovie);

export default rentals;