import { RequestHandler } from "express";
import { StandardResponse } from "../Types/StandardRes";
import { Course } from "./course.schema";
import { StudentModel } from "../Students/students.model";



export const post_course1: RequestHandler<{ student_id: string; }, StandardResponse<number>, Course, unknown> = async (req, res, next) => {
    try {
        const new_course = req.body;
        const { student_id } = req.params;
        const result = await StudentModel.updateOne({ _id: student_id }, { $push: { courses: new_course } });
        res.json({ success: true, data: result.modifiedCount });
    } catch (error) {
        next(error);
    }
};

export const get_course1: RequestHandler<{ student_id: string, course_id: string; }, StandardResponse<Course | {}>, unknown, unknown> = async (req, res, next) => {
    try {
        const { student_id, course_id } = req.params;
        const results = await StudentModel.findOne({ _id: student_id, "courses._id": course_id }, { "courses.income.$": 1 });
        res.json({ success: true, data: results ? results : {} });
    } catch (error) {
        next(error);
    }
};

export const get_courses1: RequestHandler<unknown, StandardResponse<Course[] | {}>, unknown, unknown> = async (req, res, next) => {
    try {
        const result = await StudentModel.find({ age: { $gt: 24 }, "courses.income": { $lt: 300000000 } }, { courses: 1, _id: 0 });
        res.json({ success: true, data: result });
    } catch (error) {
        next(error);
    }
};

export const put_course1: RequestHandler<{ student_id: string, course_id: string; }, StandardResponse<Course | {}>, { description: string; }, unknown> = async (req, res, next) => {
    try {
        const { student_id, course_id } = req.params;
        const { description } = req.body;
        const results = await StudentModel.updateOne({ _id: student_id, "courses._id": course_id }, { $set: { "courses.$.description": description } });
        res.json({ success: true, data: results });
    } catch (error) {
        next(error);
    }
};

export const delete_course1: RequestHandler<unknown, unknown, unknown, unknown> = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};