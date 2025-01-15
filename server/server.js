const express=require("express");
const errorHandler = require("./middlewares/errorMiddleware");
const dbConnect = require("./config/dbConnect");
const cors=require("cors");
const productRoutes = require("./routes/productRoutes");

const app=express();
dbConnect();
// middleware

app.use(express.json());


app.use(cors());
// routes
app.use('/api/v1/products',productRoutes);  
// global error handler
app.use(errorHandler);

// listen to the server

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})

// 8u9PlgzDMMtrV7Yz

// mongodb+srv://neekeshsunam10:8u9PlgzDMMtrV7Yz@upload-image-v1.hzqv4.mongodb.net/upload_image?retryWrites=true&w=majority&appName=upload-image-v1