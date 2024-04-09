import { RequestHandler } from "express";
import { StandardResponse } from "../Types/StandardRes";
import { Student, StudentModel } from "./students.model";
import { setDriver } from "mongoose";


export const post_student: RequestHandler<unknown, StandardResponse<Student>, Student, unknown> = async (req, res, next) => {
    try {
        const newStudent = req.body;
        const NewStud = await StudentModel.create(newStudent);
        res.json({ success: true, data: NewStud });
    } catch (error) {
        next(error);
    }
};


export const get_students: RequestHandler<unknown, StandardResponse<Student | {}>, unknown, unknown> = async (req, res, next) => {
    try {
        const results = await StudentModel.find({ $or: [{ age: { $in: [24, 27] } }, { "location.donation": { $gt: 2400 } }] });
        res.json({ success: true, data: results ? results : {} });

    } catch (error) {
        next(error);
    }
};

export const get_student: RequestHandler<{ student_id: string; }, StandardResponse<Student | {}>, unknown, unknown> = async (req, res, next) => {
    try {
        const { student_id } = req.params;
        const results = await StudentModel.findOne({ _id: student_id }, { 'location.category': 1 });
        res.json({ success: true, data: results ? results : {} });
    } catch (error) {
        next(error);
    }
};

export const put_student: RequestHandler<{ student_id: string; }, StandardResponse<Student | {}>, { yt_id: string, sem_id: string, newd: number, new_h: number; }, unknown> = async (req, res, next) => {
    try {
        const { sem_id, yt_id, newd, new_h } = req.body;
        const { student_id } = req.params;

        if (student_id === sem_id) {
            const results = await StudentModel.updateOne({ _id: student_id }, { $mul: { "location.donation": newd } });
            res.json({ success: true, data: results ? results : {} });
        }
        else if (student_id === yt_id) {
            const results = await StudentModel.updateOne({ _id: student_id }, { $inc: { height: new_h } });
            res.json({ success: true, data: results ? results : {} });
        }
        else throw new Error("oops!");

    } catch (error) {
        next(error);
    }
};

export const sort_student: RequestHandler<unknown, unknown, unknown, { action: string; }> = async (req, res, next) => {
    try {
        const { action } = req.query;

        if (action === 'asc') {
            const results = await StudentModel.find().sort({ height: -1 });
            res.json({ success: true, data: results });

        }


    } catch (error) {
        next(error);
    }
};