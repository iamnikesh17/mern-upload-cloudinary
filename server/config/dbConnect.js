const mongoose=require("mongoose");

const dbConnect=async ()=>{
    try {
        await mongoose.connect("mongodb+srv://neekeshsunam10:8u9PlgzDMMtrV7Yz@upload-image-v1.hzqv4.mongodb.net/upload_image?retryWrites=true&w=majority&appName=upload-image-v1");
        console.log("db connection successful");
    } catch (error) {
        console.log("db connection unsuccesful")
    }
}

module.exports=dbConnect;