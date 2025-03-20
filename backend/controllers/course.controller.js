import { course } from "../models/course.model.js";
import cloudinary from "cloudinary";


export const createCourse=async(req,res)=>{
 
  const {title,description,price}=req.body;
  try {
    if(!title || !description || !price){
      return res.status(400).json({errors:"all feild are required"})
    }
    const {image} = req.files;
    if(!req.files || Object.keys(req.files).length===0 ){
      return res.status(400).json({errors:"no file uploaded"})
    }



    const allowedFormat=["image/png","image/jpeg"]

    if(!allowedFormat.includes(image.mimetype)){
      return res.staus(400).json({errors:"invlid file format .only jpej or png are allowed"})
      
    }
    //cloudinary code

    const cloud_response=await cloudinary.v2.uploader.upload(image.tempFilePath)

    if(!cloud_response || cloud_response.error){
      return res.status(400).json({errors:"error uploading file to cloudinary"})
    }


    const courseData={
      title,
      description,
      price,
      image:{
        public_id: cloud_response.public_id,
        url:cloud_response.secure_url,
      }
    };
    const Course=await course.create(courseData)
    res.json({
      message:"course created sucessfully",
      Course
    })
  } catch (error) {

    console.log(error);
    res.status(500).json({error:"error in course creating"});
    
  }

};

export const updateCourse=async(req,res)=>{
  const {courseId}=req.params;
  const {title,description,price,image}=req.body;
  try{
  }catch(error){
    console.log("error in course update",error);
    

  }
}