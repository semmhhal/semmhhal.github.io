import {Schema,InferSchemaType,model} from 'mongoose'

const HobbySchema=new Schema({hobby:String})
const Schema = new Schema({
    firstname:String,
    lastname:String,
    hobbies:[HobbySchema]
})

export type Hobby= InferSchemaType<typeof HobbySchema>
export type User= InferSchemaType<typeof Schema>
export const UserModel=model<'user',Schema>