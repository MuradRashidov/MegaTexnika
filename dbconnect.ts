import dotenv from "dotenv"
import mongoose from 'mongoose';
dotenv.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL || "",{
        });
        console.log('MongoDB connection is successful.');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default connectDB;
