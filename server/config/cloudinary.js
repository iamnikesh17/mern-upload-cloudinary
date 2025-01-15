const cloudinary=require("cloudinary").v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");


cloudinary.config({
    cloud_name:"dwerrzfhq",
    api_key:"583582821632779",
    api_secret:"QiChJvGJAWw5azPDUDgBhMOlOhY"
});

const storage=new CloudinaryStorage({
    cloudinary,
    allowedFormats:["jpg",'png'],
    params:{
        folder:"practice",
        transformation:[{width:500,height:500,crop:"limit"}]
        
    }
})

module.exports=storage;




