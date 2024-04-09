//dependencies
import express, { NextFunction, Response, Request } from 'express'
import morgan from 'morgan'

import { setCourseCode } from './middleware/course-code'
import { getusersRoute, rootRoute, addUser } from './routes/routes'
import userRouter from './users/routes'
//INITALIZATION, APPLICATION STARTER
const app = express()

//configuration
app.set('port', 3000)
app.set('x-powered-by', false)



//to add an extra header we can assign it to middleware, to check entrance exit
//we check id and stuff as well
//middlewares
app.use(morgan('dev'))//logger


//route

// app.get('/', rootRoute)
// app.post('/', express.json(), addUser)
// app.get('/users', setCourseCode, getusersRoute)

app.use('/user',userRouter)


app.get('/login', setCourseCode, (req, res, next) => {
    res.json({ login: true })
})

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    next(new Error('no route'))
})
//error handlers
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ sucess: false, msg: error.message })
})

app.listen(3000, () => console.log(`listening to 3000`))