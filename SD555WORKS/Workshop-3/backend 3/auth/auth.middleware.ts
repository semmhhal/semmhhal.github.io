import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { ErrorResponse, IToken } from "../types/types";

export const checkToken: RequestHandler = async (req, res, next) => {
    try {
        const header = req.headers['authorization'] as string;
        if (!header) throw new ErrorResponse(`Token is required`, 401);

        const token = header.split(' ')[1]
        if (!token) throw new ErrorResponse(`Token is not correct`, 401);

        const decoded_token = jwt.verify(token, process.env.JWT_PRIVATE_KEY!)
        if (!decoded_token) throw new ErrorResponse(`Wrong Token Signature`, 401);

        req.body['tokenData'] = decoded_token as IToken;
        next()
    } catch (e) {
        next(e)
    }
}