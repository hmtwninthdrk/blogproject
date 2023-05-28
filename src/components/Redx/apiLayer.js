import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { buildUrl } from "./fnctns";

export const apiLayer = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:"https://fakestoreapi.com"}),
    tagTypes: ['Product'],
    endpoints: (builder) =>({
        getProduct: builder.query({
            query:({id})=>`/products/${id}`,
            providesTags: ["Product"]
        }),
        getOneCateg:builder.query({
            query:({item})=>`/products/category/${item}`,
            providesTags: ["SoloCategory"]
        }),
        
    })
})


export const {useGetProductQuery, useGetOneCategQuery} = apiLayer;