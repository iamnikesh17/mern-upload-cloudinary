import {  PRODUCT_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createProduct:builder.mutation({
            query:(data)=>({
                url:PRODUCT_URL,
                method:'POST',
                body:data
            })
        }),
        getProducts:builder.query({
            query:()=>({
                url:PRODUCT_URL,
                method:'GET'
            }),
            providesTags:['Product'],
            keepUnusedDataFor:5
        })
    })
})


export const {useCreateProductMutation,useGetProductsQuery}=productApiSlice;