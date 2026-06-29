import mongoose from "mongoose";
export const connectDB= async () => {
    try{

        // let URI=process.env.MONGO_URI

        // if (!URI) return

       await mongoose.connect(process.env.MONGO_URI!)
       console.log("mongodb connected")
    }catch(error){
        console.log("error in connecting db", error)
    }
}