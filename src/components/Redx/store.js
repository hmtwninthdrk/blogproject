import { configureStore } from "@reduxjs/toolkit";
import categoriesLayer from "./categories/categoriesLayer";
import productsLayer from "./products/productsLayer";
import { apiLayer } from "./apiLayer";
import userLayer from "./user/userLayer";

export const store = configureStore({
    reducer: {
        categories: categoriesLayer,
        products: productsLayer,
        user: userLayer,
        [apiLayer.reducerPath]: apiLayer.reducer,
    },
    middleware: (getMiddleware)=>getMiddleware().concat(apiLayer.middleware),
    devTools:true,
});