import express from "express"
import  dotenv from "dotenv"
import mongoose from "mongoose";
import courseRoute from "./routes/course.routes.js";
import { v2 as cloudinary } from 'cloudinary';
import fileUpload from "express-fileupload";
const app = express()
dotenv.config();
//middelwear
app.use(express.json());
app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));


const port = process.env.PORT ||3000
const db_uri=process.env.mongo_uri


try{
  await mongoose.connect(db_uri);
  console.log("connecte to mongodb");
}catch(error){
  console.log(error); 
}


//defining routes
app.use("/api/v1/course",courseRoute)

//cloudinary configuration code
cloudinary.config({ 
  cloud_name: process.env.cloud_name, 
  api_key: process.env.api_key, 
  api_secret: process.env.api_secret 
  // Click 'View API Keys' above to copy your API secret
});

app.listen(port, () => {
  console.log(`server is running  on port ${port}`)
})