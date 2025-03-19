import mongoose from "mongoose";
const sourseSchema=new mongoose.Schema({
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
    image:{type:String,
        required :true,
    }
})

export const course=mongoose.model("course",courseSchema);