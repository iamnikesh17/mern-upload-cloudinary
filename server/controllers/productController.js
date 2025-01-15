const Product = require("../models/Product");

const createProduct=async (req,res,next)=>{
    try {
        const {name,price,description}=req.body;
        const image=req.file.path;

           // Extract the image URLs from the multer response
            // const imageUrls = req.files.map((file) => file.path);


        if(!name ||!price ||!description ||!image){
            return next(appError("All fields are required",400));
        }
        const product=await Product.create({
            name,
            price,
            description,
            image  //images:imageUrls
            
        })
        res.status(201).json(product);
    } catch (error) {
        next(appError(error.message))
    }
}

const getAllProducts=async (req,res,next)=>{
    try {
        const products=await Product.find();
        if(!products){
            return next(appError("No products found",404));
        }
        else{
            res.status(200).json(products)
        }
    } catch (error) {
        next(appError(error.message))
    }
}

module.exports={
    createProduct,
    getAllProducts
}



// practice


