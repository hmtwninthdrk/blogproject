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


const userLayer = createSlice({
    name: 'user',
    initialState:{
        currentUser:[],
        cart:[],
        isLoading:false,
    },
    reducers:{
        addToCart: (state,{payload})=>{
            let ncart = [...state.cart];
            const srch = state.cart.find(({id})=>id ===payload.id)

            if(srch){
                ncart = ncart.map((item)=>{
                    return item.id === payload.id ? {...item, quantity: payload.quantity || item.quantity + 1} 
                    : item;
                })
            }
            else ncart.push({...payload,quantity:1})
            state.cart = ncart;

        },
        removeItemFromCart: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => id !== payload);
          },
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

export const {addToCart,removeItemFromCart} = userLayer.actions;


export default userLayer.reducer;