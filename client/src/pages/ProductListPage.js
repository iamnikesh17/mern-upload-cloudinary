import React from 'react';
import { useGetProductsQuery } from '../slices/productApiSlice';
import { ProductCard } from '../components/ProductCard';
 // Assuming ProductCard is another component you have created

export const ProductListPage = () => {
  // Example array of products for UI demonstration

  const {data:products,isLoading,error}=useGetProductsQuery();


  return isLoading?<h1>laoding...</h1>:error?<h1>{error?.data?.message || error?.error}</h1>:(
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">Our Products</h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                products.length === 0?(
                    <h1>
                        No products found. Please add some in the admin panel.
                    </h1>
                ):(
                    products.map((product)=>(
                        <ProductCard key={product._id} product={product}/>
                    ))
                )
            }
        </div>
      </div>
    </div>
  );
};
