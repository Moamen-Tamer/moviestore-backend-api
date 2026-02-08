import type { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'
import type { Customer, Gender, Staff, statusError } from "../models.js";
import { customers, refreshTokens, staff } from "../database/db.js";

export const accessKey = process.env.accessKey || "cf2334cd26fe741fbb49286f2a8de3e00975828a214b489175634025260c05cc827ff7a0373936bdd82e791c90701524f9480de51d1b4a9b53fe0c790bcb4428";
export const refreshKey = process.env.refreshKey || "12dfe7cbed939f05f45ea46d7397bcbbf1890ccd7e02db97fca71baa3c758a9c3d414db307547744a132c3a2e0c2eaec44563b644c4d960024ff3317d9a7d764";

const accessTokenExpiry = '1d';
const refreshTokenExpiry = '7d';

const cookiesOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict' as const,
    maxAge: 1000 * 60 * 60 * 24
}

const refreshCookiesOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict' as const,
    maxAge: 1000 * 60 * 60 * 7
}

const generateAccessToken = (user: Customer | Staff) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    return jwt.sign(payload, accessKey, { expiresIn: accessTokenExpiry });
}

const generateRefreshToken = (user: Customer | Staff) => {
    const payload = {
        id: user.id,
        name: user.name,
        email: user.email
    }

    return jwt.sign(payload, refreshKey, { expiresIn: refreshTokenExpiry });
}

export const register = async (req: Request, res: Response, next: NextFunction) => {
    const isExist = customers.find((customer) => customer.email === req.body.email);

    if (isExist) {
        const error = new Error(`user already exists`) as statusError;
        error.status = 400;
        return next(error);
    }

    if (req.body.gender !== 'male' && req.body.gender !== 'female') {
        const error = new Error(`invalid gender`) as statusError;
        error.status = 400;
        return next(error);
    }

    const gender: Gender = req.body.gender;

    const lastId = Number(customers[customers.length - 1]?.id.replace("CU", ""));
    const newId = `CU${lastId + 1}`;

    const password = await bcrypt.hash(req.body.password, 10);

    const newCustomer: Customer = {
        id: newId,
        name: (req.body.name as string),
        gender,
        email: (req.body.email as string),
        password,
        phone: (req.body.phone as string),
        rentals: [],
        status: "active"
    }

    const {password: _, ...customerWithoutPassword} = newCustomer;

    customers.push(newCustomer),
    res.status(201).json(customerWithoutPassword);
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.email.match(/@company.com/i)) {
        const staffMember = staff.find((member) => member.email === req.body.email);

        if (!staffMember) {
            const error = new Error(`no staff account found with this email`) as statusError;
            error.status = 404;
            return next(error);
        }

        const isPassCorrect = await bcrypt.compare(req.body.password, staffMember.password);

        if (!isPassCorrect) {
            const error = new Error(`password is incorrect`) as statusError;
            error.status = 404;
            return next(error);
        }

        const accessToken = generateAccessToken(staffMember);
        const refreshToken = generateRefreshToken(staffMember);

        refreshTokens.add(refreshToken);

        res.cookie('accessToken', accessToken, cookiesOptions);
        res.cookie('refreshToken', refreshToken, refreshCookiesOptions);

        res.json({
            message: "login successful",
            staffMember: {
                id: staffMember.id,
                name: staffMember.name,
                email: staffMember.email
            }
        });
    } else {
        const customer = customers.find((customer) => customer.email === req.body.email);

        if (!customer) {
            const error = new Error(`no customer account found with this email`) as statusError;
            error.status = 404;
            return next(error);
        }

        const isPassCorrect = await bcrypt.compare(req.body.password, customer.password);

        if (!isPassCorrect) {
            const error = new Error(`password is incorrect`) as statusError;
            error.status = 401;
            return next(error);
        }

        const accessToken = generateAccessToken(customer);
        const refreshToken = generateRefreshToken(customer);

        refreshTokens.add(refreshToken);

        res.cookie('accessToken', accessToken, cookiesOptions);
        res.cookie('refreshToken', refreshToken, refreshCookiesOptions);

        res.json({
            message: "login successful",
            customer: {
                id: customer.id,
                name: customer.name,
                email: customer.email
            }
        });
    }
}

export const logout = (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
        refreshTokens.delete(refreshToken);
    }

    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');

    res.status(200).json({ message: "logout successful" });
}

export const authStatus = (req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: "user authenticated",
        user: req.user
    });
}

export const refresh = (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken || !refreshTokens.has(refreshToken)) {
        const error = new Error(`invalid refresh token`) as statusError;
        error.status = 401;
        return next(error);
    }

    jwt.verify(refreshToken, refreshKey, (err: any, user: any) => {
        if (err) {
            const error = new Error(`invalid or expired refresh token`) as statusError;
            error.status = 403;
            return next(error);
        }

        const accessToken = generateAccessToken(user);
        res.cookie('accessToken', accessToken, cookiesOptions);

        res.status(200).json({ message: "token has been refreshed" });
    })
}