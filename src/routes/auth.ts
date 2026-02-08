import express from "express";
import { login, logout, authStatus, refresh, register } from "../controller/authController.js";
import { authenticateToken, validateLoginData, validateRegisterData, validationHandler } from "../middleware/authentication.js";
import { authLimiter } from "../middleware/limiter.js";

const auth = express.Router();

auth.post('/register', authLimiter, validateRegisterData, validationHandler, register);
auth.post('/login', authLimiter, validateLoginData, validationHandler, login);
auth.post('/logout', authenticateToken, logout);
auth.post('/refresh', authenticateToken, refresh);
auth.get('/me', authenticateToken, authStatus);

export default auth;