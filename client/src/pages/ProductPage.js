import React, { useState } from 'react';
import {  useCreateProductMutation } from '../slices/productApiSlice';
import { useNavigate } from 'react-router-dom';

export const ProductPage = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // For handling the image file
  const navigate = useNavigate();

  const [createProduct, { isLoading, error }] = useCreateProductMutation();

   // the following code is for multiple images

    // const handleImageChange = (e) => {
    //   setImages(e.target.files); 
    // };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image); // Append the image file to formData

  // Append all image files to the form data
  // Array.from(images).forEach((file) => {
  //   formData.append('images', file);
  // });

   
  

    try {
      const res = await createProduct(formData);
      if (res.error) {
        console.log(error);
      } else {
        navigate("/products");
        console.log("Product added successfully");
      }
    } catch (error) {
      console.log(error?.data?.message || error?.error);
    }
  };


 


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Create New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter product name"
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="price"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter product price"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter product description"
            />
          </div>

          {/* Image */}
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Product Image</label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              // multiple // Allow multiple files
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
              onChange={(e) => setImage(e.target.files[0])} // Handle file input change
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              disabled={isLoading}
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {isLoading ? 'Creating...' : 'Create Product'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
