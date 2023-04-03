import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'


export const getCart = createAsyncThunk(
    'cart/getCart',
    async(filter, {rejectWithValue})=>{
        try{
            const res = await axios (`http://localhost:4444/cart`)
            if (res.statusText !== "OK"){
                throw new Error("Server error")
            }
            return res.data
        } catch (e) {
            return rejectWithValue(e.message)

        }
    }
)


const cartSlice = createSlice({
    name:"cart",
    initialState:{
        data:[],
        status:'',
        error:''
    },
    reducers:{

        addToCart:(state, action)=>{
            state.data = [...state.data, action.payload]
        }
    },
    extraReducers:{
        [getCart.pending] :(state,action)=>{
            state.status = 'loading'
            state.error = ''
        },
        [getCart.fulfilled]:(state, action)=>{
            state.status = 'resolve'
            state.error =''
            state.data = action.payload
        },
        [getCart.rejected]:(state,action)=>{
            state.status = 'error'
            state.error = action.payload
        }
    }
})


export const {addToCart} = cartSlice.actions
export default  cartSlice.reducer