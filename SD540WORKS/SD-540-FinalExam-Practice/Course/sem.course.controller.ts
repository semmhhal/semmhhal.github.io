import { RequestHandler } from "express";
import { StandardResponse } from "../Types/StandardRes";
import { Course } from "./course.schema";
import { StudentModel } from "../Students/students.model";



export const post_course: RequestHandler<{ student_id: string; }, StandardResponse<number>, Course, unknown> = async (req, res, next) => {
    try {
        const newcourse = req.body;
        const { student_id } = req.params;
        const results = await StudentModel.updateOne({ _id: student_id }, { $push: { courses: newcourse } });
        res.json({ success: true, data: results.modifiedCount });
    } catch (error) {
        next(error);
    }
};



export const get_course: RequestHandler<unknown, unknown, Course, unknown> = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};

export const get_courses: RequestHandler<unknown, StandardResponse<Course | {}>, unknown, unknown> = async (req, res, next) => {
    try {
        const results = await StudentModel.find({ $and: [{ age: { $gt: 24 } }, { "courses.$.income": { $lt: 300000000 } }] }, { courses: 1 });
        res.json({ success: true, data: results ? results : {} });

    } catch (error) {
        next(error);
    }
};

export const put_course: RequestHandler<{student_id:string,course_id:string}, StandardResponse<Course>, Course, unknown> = async (req, res, next) => {
    try {
        const {student_id,course_id}= req.params
        

    } catch (error) {
        next(error);
    }
};

export const delete_course: RequestHandler<unknown, unknown, unknown, unknown> = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};