import { RequestHandler } from "express";
import { StandardResponse } from "../Types/StandardRes";
import { Student, StudentModel } from "./students.model";


export const post_student1: RequestHandler<unknown, StandardResponse<Student>, Student, unknown> = async (req, res, next) => {
    try {
        const new_course = req.body;
        const result = await StudentModel.create({ new_course });
        res.json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};


export const get_students1: RequestHandler<unknown, StandardResponse<Student[]>, unknown, unknown> = async (req, res, next) => {
    try {
        const result = await StudentModel.find({ $and: [{ "age": { $in: [24, 27] } }, { "location.donation": { $gt: 2399 } }] });
        res.json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

export const get_student1: RequestHandler<{ student_id: string; }, StandardResponse<Student | null>, unknown, unknown> = async (req, res, next) => {
    try {
        const { student_id } = req.params;
        const result = await StudentModel.findOne({ _id: student_id }, { "location.category": 1, _id: 0 });
        res.json({ success: true, data: result || null });
    } catch (error) {
        next(error);
    }
};

export const put_student1: RequestHandler<unknown, StandardResponse<number>, { yt_id: string, new_h: number; }, unknown> = async (req, res, next) => {
    try {
        const { yt_id, new_h } = req.body;
        const result = await StudentModel.updateOne({ _id: yt_id }, { $inc: { height: new_h } });
        res.json({ success: true, data: result.modifiedCount });
    } catch (error) {
        next(error);
    }
};

export const sort_student1: RequestHandler<unknown, unknown, unknown, {action: string}> = async (req, res, next) => {
    try {
        const something = req.query;
        if (something.action === "asc") {
            const result = await StudentModel.find({}, {height: 1, _id: 0}).sort({height: -1})
            res.json({success: true, data: result})
        }
    } catch (error) {
        next(error);
    }
};

