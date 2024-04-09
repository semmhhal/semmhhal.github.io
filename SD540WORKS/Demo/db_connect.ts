import mongoose from "mongoose";
import 'dotenv/config'


export function connect_DB(){
if(process.env.MONGO_DB)
mongoose.connect(process.env.MONGO_DB)
    .then(()=>console.log('db connected sucessfully!'))
    .catch(()=>console.log('connection failed'))
}