import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'

export const getShop = createAsyncThunk(
    'shop/getShop',
    async(filter,{rejectWithValue})=>{
        try {
            const res = await axios(`http://localhost:4444/catalog?${filter?.type ? 'type=' + filter.type + '&' : ''}${filter.brand.length ? 'brand=' + filter.brand + '&' : ''}${filter.search !== '' ? "title_like=" + filter.search + '&' : ''}${filter?.sort === 'price' ? '_sort=price&_order=asc' : filter?.sort === 'new' ? 'new=true' : filter?.sort === 'name' ? '&_sort=title&_order=asc' : ''}`)
            if(res.statusText !== 'OK'){
                throw new Error('Server error')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }

)



const shopSlice = createSlice({
    name:"shop",
    initialState:{
        data:[],
        dataLength:0,
        filter: {
            type: '',
            sort:'',
            size:'',
            brand:'',
            search:''
        },
        status:'',
        error:''
    },
    reducers: {

        changeType:(state, action)=>{
            state.filter ={
                ...state.filter,
                type:action.payload
            }
        },
        changeSize:(state, action)=>{
            state.filter = {
                ...state.filter,
                size:action.payload
            }
        },
        changeBrand:(state, action)=> {
            state.filter = {
                ...state.filter,
                brand:action.payload
            }
        },
        changeSearch :(state, action)=>{
            state.filter = {
                ...state.filter,
                search:action.payload
            }
        },
        sortBy :(state, action)=>{
            state.filter = {
                ...state.filter,
                sort:action.payload
            }
        }



    },

    extraReducers: {
        [getShop.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getShop.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getShop.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.data = action.payload
            state.dataLength = action.payload.length
        }
    }
})





export const {changeType, changeSize, changeBrand, changeSearch, sortBy} = shopSlice.actions
export default shopSlice.reducer