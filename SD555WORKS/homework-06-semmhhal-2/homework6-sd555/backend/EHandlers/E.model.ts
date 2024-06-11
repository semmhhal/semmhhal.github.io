import { Schema, InferSchemaType, model } from 'mongoose';

const ESchema = new Schema({
  Email: { type: String, unique: true, required: true },
});

type E_User = InferSchemaType<typeof ESchema>;
export const EModel = model<E_User>('user', ESchema);
