import express from "express"
import  dotenv from "dotenv"
import mongoose from "mongoose";
import router from "./routes/course.routes";
const app = express()
dotenv.config();
const port = process.env.PORT ||3000

const db_uri=process.env.mongo_uri
try{
  await mongoose.connect(db_uri);
  console.log("connecte to mongodb");
}catch(error){
  console.log(error);
  
}

app.listen(port, () => {
  console.log(`server is running  on port ${port}`)
})