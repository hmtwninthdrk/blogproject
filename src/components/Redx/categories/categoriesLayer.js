import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getCategories = createAsyncThunk('categories/getCategories', async (_, thunkAPI) =>{
    try{
        const res = await axios('https://fakestoreapi.com/products/categories')
        return res.data;
    }
    catch(err){
        console.log(err)
        return thunkAPI.rejectWithValue(err)

    }
})


const categoriesLayer = createSlice({
    name: 'categories',
    initialState:{
        list:[],
        isLoading:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending, (state)=>{
            state.isLoading = true;
        })
        builder.addCase(getCategories.fulfilled, (state,action)=>{
            state.list = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getCategories.rejected, (state)=>{
            state.isLoading = false;
        })
    }
})

export default categoriesLayer.reducer;