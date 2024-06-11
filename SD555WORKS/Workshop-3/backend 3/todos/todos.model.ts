import mongoose, { Schema, model, InferSchemaType } from 'mongoose';

const schema = new Schema({
    user_id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    completed: { type: Boolean, default: false }
})

export type ITodo = InferSchemaType<typeof schema>;

export default model<ITodo>('todo', schema)