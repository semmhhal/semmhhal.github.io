import mongoose from "mongoose";
import 'dotenv/config';
import { connect_DB } from "./db_connect";

connect_DB();
import { Schema, InferSchemaType, model } from "mongoose";

const schema = new Schema(({
    name: { type: String, required: true, unique: true },
    location: {
        category: { type: String, required: true, enum: ['fruit', 'vegetable'] },
        aisle: { type: String, required: true }
    },
    price: { type: Number, required: true },
    amount: { type: Number, required: true }
}));


type UserSchema = InferSchemaType<typeof schema>;
const UserModel = model<UserSchema>('user', schema);





async function addUser(newUser: UserSchema) {
    const results = await UserModel.create(newUser);
}

addUser({
    name: "Banana",
    location: {
        category: "fruit",
        aisle: "C1"
    },
    price: 2.99,
    amount: 30
}
);

