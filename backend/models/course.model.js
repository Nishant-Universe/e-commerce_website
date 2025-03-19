import mongoose from "mongoose";
const courseSchema=new mongoose.Schema({
    title:{
        type :String,
        require:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:
    {public_id:{
        type:String,
        required:true

    },
    url:{
        type:String,
        required:true
    }
    }
});

export const course=mongoose.model("course",courseSchema);