import mongoose from 'mongoose';


export function connectDB() {
    if (process.env.MONGODB)
        mongoose.connect(process.env.MONGODB)
            .then(() => console.log('successfully connected to DB!'))
            .catch(() => console.log('cannot connect to DB'));
}