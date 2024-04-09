import mongoose from 'mongoose';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import StudentRouter from './Students/students.router';
import { ErrorStatus } from './Types/errors';
import { connectDB } from './mongoConnect';
import cors from 'cors'

const app = express();
connectDB();
app.use(cors())
app.use(morgan('dev'));


app.use('/students', StudentRouter);


app.all("*", (res, req, next) => { next(new Error('Route not found')); });

app.use((err: unknown, req: Request, res: Response) => {
    if (err instanceof ErrorStatus) {
        res.status(err.status).send(err.message);
    }
    else if (err instanceof Error) {
        res.status(500).send(err.message);
    }
    else {
        res.status(500).send('unknown problem');
    }
});


app.listen(3000, () => console.log('listening to port 3000'));