const express=require("express");
const { createProduct, getAllProducts } = require("../controllers/productController");
const storage = require("../config/cloudinary");
const multer=require("multer");

const productRoutes=express.Router();


const upload=multer({
    storage
})

productRoutes.post("/",upload.single('image'),createProduct);
productRoutes.get("/",getAllProducts);

module.exports=productRoutes;

