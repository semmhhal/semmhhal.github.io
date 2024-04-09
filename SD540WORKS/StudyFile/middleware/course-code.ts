import { Request,Response,NextFunction,RequestHandler } from "express"
export const setCourseCode: RequestHandler<unknown, unknown, unknown,undefined>= (req,res,next)=>{
    res.set('X-Course-Code','SD540')
    next()
}