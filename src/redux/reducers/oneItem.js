import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'


export const getOneItem = createAsyncThunk(


    'oneItem/getOneItem',
    async(id,{rejectWithValue})=>{
        try {
            const res = await axios(`http://localhost:4444/catalog/${id}`)
            if(res.statusText !== 'OK'){
                throw new Error('Server error')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }

)



const oneItem = createSlice({
    name: "oneItem",
    initialState: {
        product: {},
        dataLength: 0,
        status: '',
        error: ''
    },
    reducers:{},


    extraReducers: {
        [getOneItem.pending] : (state) => {
            state.status = 'loading'
            state.error = ''
        },
        [getOneItem.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getOneItem.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.product = action.payload
        }
    }

})









export default oneItem.reducer