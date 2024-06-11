import express, { json, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { ErrorResponse, IResponse } from './types/types'
import authRouter from './auth/auth.router';
import todosRouter from './todos/todos.router';
import usersRouter from './users/users.router';
import { checkToken } from './auth/auth.middleware'

dotenv.config();
const app = express();

(async function () {
    try {
        if (process.env.DB_SERVER_URL) {
            await mongoose.connect(process.env.DB_SERVER_URL)
            console.log(`DB server connected successfully`)
        } else {
            throw new Error(`DB Server URL not found`)
        }
    } catch (error) {
        console.log(error)
        process.exit(0)
    }
})()


app.use(cors())
app.use(morgan('dev'))
app.use(json())

// routes
app.use('/auth', authRouter)
app.use('/todos', checkToken, todosRouter)
app.use('/users', usersRouter)
// Catch all unhandled requests
app.all('*', async (req, res, next) => next(new ErrorResponse(`Route not found`, 404)))

// error handler
app.use((error: ErrorResponse, req: Request, res: Response<IResponse<string>>, next: NextFunction) => {
    res.status(error.status || 500).json({ success: false, data: error.message })
})

app.listen(3000, () => console.log(`Server is listening on 3000`))