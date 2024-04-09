import { RequestHandler } from "express"
import { StandardImport } from "../types/response"

export const get_users:RequestHandler<unknown, unknown, unknown, unknown> =async (req,res,next)=>{
try{

}
catch(error){
    next(error)
}
}
export const post_users:RequestHandler<unknown, unknown, unknown, unknown> =async  (req,res,next)=>{
    try{

    }
    catch(error){
        next(error)
    }  
}
export const put_user:RequestHandler<unknown, unknown, unknown, unknown> =async  (req,res,next)=>{
    try{

    }
    catch(error){
        next(error)
    }  
}
export const update_users:RequestHandler<unknown,StandardImport<boolean>, unknown, unknown> =async (req,res,next)=>{
    try{

    }
    catch(error){
        next(error)
    }  
}
export const delete_user:RequestHandler<unknown, unknown, unknown, unknown> =async (req,res,next)=>{
    try{

    }
    catch(error){
        next(error)
    }  
}