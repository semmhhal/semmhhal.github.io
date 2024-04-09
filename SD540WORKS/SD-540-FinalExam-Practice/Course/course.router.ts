import express from 'express';
import { post_course, get_course, get_courses, put_course, delete_course } from './sem.course.controller';
import { post_course1, get_course1, get_courses1, put_course1, delete_course1 } from './yt.course.controller';

const CourseRouter = express.Router({ mergeParams: true });

//CourseRouter.post('/', express.json(), post_course);
CourseRouter.post('/', express.json(), post_course1);
//CourseRouter.get('/', get_course);
CourseRouter.get('/:course_id', get_course1);
CourseRouter.get('/', get_courses);
//CourseRouter.get('/', get_courses1);
//CourseRouter.put('/:course_id', express.json(), put_course);
CourseRouter.patch('/:course_id', express.json(), put_course1);
CourseRouter.delete('/:course_id', delete_course);
CourseRouter.delete('/:course_id', delete_course1);



export default CourseRouter;