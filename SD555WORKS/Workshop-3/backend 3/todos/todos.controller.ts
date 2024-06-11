import { RequestHandler } from "express"
import { BodyWithToken, ErrorResponse, IResponse } from "../types/types"
import todosModel, { ITodo } from "./todos.model"

export const getTodos: RequestHandler<unknown, IResponse<ITodo[]>, BodyWithToken> = async (req, res, next) => {
    try {
        const { tokenData: { _id: user_id } } = req.body;
        const results = await todosModel.find({ user_id });
        res.json({ success: true, data: results })
    } catch (error) {
        next(error)
    }
}
export const addTodo: RequestHandler<unknown, IResponse<ITodo>, BodyWithToken & ITodo> = async (req, res, next) => {
    try {
        const { tokenData: { _id: user_id } } = req.body;
        const results = await todosModel.create({
            ...req.body,
            user_id
        });
        res.json({ success: true, data: results })
    } catch (error) {
        next(error)
    }
}
export const getTodoById: RequestHandler<{ todo_id: string }, IResponse<ITodo>, BodyWithToken> = async (req, res, next) => {
    try {
        const { tokenData: { _id: user_id } } = req.body;
        const { todo_id } = req.params;
        const results = await todosModel.findOne({ _id: todo_id, user_id }).lean();
        res.json({ success: true, data: results as ITodo })
    } catch (error) {
        next(error)
    }
}
export const updateTodoById: RequestHandler<{ todo_id: string }, IResponse<number>, BodyWithToken & ITodo> = async (req, res, next) => {
    try {
        const { tokenData: { _id: user_id } } = req.body;
        const { todo_id } = req.params;

        const results = await todosModel.updateOne(
            { _id: todo_id, user_id },
            req.body
        )
        // await todosModel.updateOne(
        //     { _id: todo_id, user_id },
        //     { $set: req.body }
        // )
        // if (!results.modifiedCount) throw new ErrorResponse(`Did not find a match to update`, 201);

        res.json({ success: true, data: results.modifiedCount })
    } catch (error) {
        next(error)
    }
}
export const deleteTodoById: RequestHandler<{ todo_id: string }, IResponse<number>, BodyWithToken> = async (req, res, next) => {
    try {
        const { tokenData: { _id: user_id } } = req.body;
        const { todo_id } = req.params;

        const results = await todosModel.deleteOne({ _id: todo_id, user_id })
        if (!results.deletedCount) throw new ErrorResponse(`Did not find a match to delete`, 201);

        res.json({ success: true, data: results.deletedCount })
    } catch (error) {
        next(error)
    }
}