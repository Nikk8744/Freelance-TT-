import mongoose from "mongoose";

const connectDB = async(req, res) => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("MongoDB connected!!")
    } catch (error) {
        console.log("MongoDB connection failed:", error)
        process.exit(1);
    }
}

export default connectDB;