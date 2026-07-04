import dotenv from "dotenv";
dotenv.config();
import app from  "./app.ts";
import { connectDb } from "./config/db.ts";

let port = process.env.PORT || 3000;

connectDb()

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})