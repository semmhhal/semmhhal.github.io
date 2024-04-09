import { Schema, InferSchemaType } from "mongoose";


export const CourseSchema = new Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    income:{ type: Number, required: true },
    description: { type: String, required: true },
    deleted: { type: Boolean, default: false }
}, { timestamps: true });

export type Course = InferSchemaType<typeof CourseSchema>;
