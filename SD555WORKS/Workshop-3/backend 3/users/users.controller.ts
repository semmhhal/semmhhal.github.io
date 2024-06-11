import { RequestHandler } from "express";
import { BodyWithToken, ErrorResponse, IResponse } from "../types/types";
import usersModel from "./users.model";
import fs from 'node:fs';
import path from 'node:path';
export const uploadPicture: RequestHandler<unknown, IResponse<boolean>, BodyWithToken> = async (req, res, next) => {
    try {
        const { tokenData: { _id: user_id } } = req.body;
        console.log(req.body);
        console.log(req.file);
        // req.file req.body 
        let results;
        if (req.file) {
            results = await usersModel.updateOne(
                { _id: user_id },
                { $push: { pictures: { url: req.file.filename } } });
            console.log({ _id: user_id });
            console.log({ $push: { pictures: { url: req.file.filename } } });
            console.log(results);
        } else {
            next(new ErrorResponse(`No file found`, 400));
        }

        res.json({ success: true, data: true });
    } catch (error) {
        next(error);
    }
};
export const getPictures: RequestHandler<{ user_id: string; }, IResponse<any>, BodyWithToken> = async (req, res, next) => {
    try {
        const { user_id } = req.params;
        const results = await usersModel.findOne({ _id: user_id }, { pictures: 1 }).lean();
        res.json({ success: true, data: results?.pictures });
    } catch (error) {
        next(error);
    }
};
export const getPictureById: RequestHandler<{ user_id: string, picture_id: string; }, IResponse<unknown>, BodyWithToken> = async (req, res, next) => {
    try {
        const { user_id, picture_id } = req.params;
        // console.log(req.params)
        const results = await usersModel.findOne({ _id: user_id, 'pictures._id': picture_id }, { 'pictures.$': 1 });
        if (results!.pictures[0].url)
            fs.createReadStream(path.join(__dirname, '../', 'uploads', results!.pictures[0].url)).pipe(res);
    } catch (error) {
        next(error);
    }
};
export const deletePictureById: RequestHandler<{ user_id: string, picture_id: string; }, IResponse<boolean>, BodyWithToken> = async (req, res, next) => {
    try {
        const { tokenData: { _id } } = req.body;
        const { user_id, picture_id } = req.params;
        const pic_results = await usersModel.findOne({ _id: user_id, 'pictures._id': picture_id }, { 'pictures.$': 1 });

        const results = await usersModel.updateOne({ _id: user_id },
            { $pull: { pictures: { _id: picture_id } } });
        if (pic_results!.pictures[0].url)
            fs.unlinkSync(path.join(__dirname, '../', 'uploads', pic_results!.pictures[0].url));
        res.json({ success: true, data: true });
    } catch (error) {
        next(error);
    }
};