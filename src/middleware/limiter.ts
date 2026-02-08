import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 1000 * 60 * 60,
    max: 1000,
    message: "too many requests, please try again later"
})

export const authLimiter = rateLimit({
    windowMs: 1000 * 60 * 5,
    max: 5,
    message: "too many authentication requests, please try again later"
})