import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkAPI) =>{
    try{
        const res = await axios('https://fakestoreapi.com/products')
        return res.data;
    }
    catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err)

    }
})


const productsLayer = createSlice({
    name: 'products',
    initialState:{
        list:[],
         filtered: [],
         related: [],
        isLoading:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(getProducts.fulfilled, (state,action)=>{
            state.list = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getProducts.rejected, (state)=>{
            state.isLoading = false;
        })
    }
})

export default productsLayer.reducer;