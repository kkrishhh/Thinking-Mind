import mongoose from "mongoose";
export const connectDB = async () => {
    try {
       await mongoose.connect("mongodb+srv://soham:Xr4ifI3l4vW4gHnU@thinkingmind.u3ndozc.mongodb.net/notes_db?retryWrites=true&w=majority&appName=ThinkingMind")
         console.log("MongoDB connected")
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);// Exit process with failure
        
    }
 }