import express from 'express';//
import { post_student, get_student, get_students, put_student, sort_student } from './sem.student.controller';
import { post_student1, get_student1, get_students1, put_student1, sort_student1 } from './yt.student.controller';
import CourseRouter from '../Course/course.router';
const StudentRouter = express.Router();


StudentRouter.post('/', express.json(), post_student);
StudentRouter.post('/', express.json(), post_student1);
// StudentRouter.get('/', get_students);
// StudentRouter.get('/', get_students1);
StudentRouter.get('/:student_id', get_student);
//StudentRouter.get('/:student_id', get_student1);
StudentRouter.put('/:student_id', express.json(), put_student);
StudentRouter.put('/', express.json(), put_student1);

StudentRouter.get('/', sort_student1);
//StudentRouter.get('/', sort_student);


StudentRouter.use('/:student_id/courses', CourseRouter);

export default StudentRouter;