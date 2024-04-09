import { Schema, InferSchemaType, model } from "mongoose";
import { Course,CourseSchema} from '../Course/course.schema'


const StudentSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    age:{type:Number,required:true},
    location: {
        category: { type: String, required: true, enum: ['country', 'city'] },
        donation: { type: Number, required: true }},
    height:{type:Number,required:true},
    courses: [CourseSchema],
    deleted: { type: Boolean, default: false }
}, { timestamps: true });



export type Student = InferSchemaType<typeof StudentSchema>

export const StudentModel = model<Student>('student', StudentSchema)
