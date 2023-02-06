import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const getLikes = createAsyncThunk(
    'like/getLike',
    async({rejectWithValue})=>{
        try {
            const res = await axios.post(`http://localhost:4444/likes`)
            if(res.statusText !== 'OK'){
                throw new Error('Server error')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }

)




const initialState = {
    likeItems:[],
    likeTotalQuantity:0,
    likeTotalAmount:0,
    status:'',
    error:''


}

const likeSlice =  createSlice({
    name:"like",
    initialState,
    reducers:{
        addToLike(state, action){
            state.likeItems.push(action.payload)
        }
    },
    extraReducers:{
        [getLikes.pending] : (state,action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getLikes.rejected] : (state,action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getLikes.fulfilled] : (state,action) => {
            state.status = 'resolve'
            state.error = ''
            state.likeItems = action.payload
        }
    }

})


export const {addToLike} = likeSlice.actions
export default likeSlice.reducer