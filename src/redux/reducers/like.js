// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
// import axios from "axios";
//
// export const getLikes = createAsyncThunk(
//     'like/getLike',
//     async({rejectWithValue})=>{
//         try {
//             const res = await axios(`http://localhost:4444/likes`)
//             if(res.statusText !== 'OK'){
//                 throw new Error('Server error')
//             }
//             return res.data
//         } catch (err) {
//             return rejectWithValue(err.message)
//         }
//     }
//
// )
//
//
//
//
// const likeSlice =  createSlice({
//     name:"like",
//     initialState:{
//         likes:[],
//         dataLength:0,
//         status:'',
//         error:''
//     },
//     reducers:{
//         deleteLikeItem:(state, action)=>{
//            const itemId = action.payload
//             state.likes = state.likes.filter((item)=> item.id !==itemId)
//         }
//
//
//     },
//     extraReducers:{
//         [getLikes.pending] : (state,action) => {
//             state.status = 'loading'
//             state.error = ''
//         },
//         [getLikes.rejected] : (state,action) => {
//             state.status = 'error'
//             state.error = action.payload
//         },
//         [getLikes.fulfilled] : (state,action) => {
//             state.status = 'resolve'
//             state.error = ''
//             state.likes = action.payload
//         }
//     }
//
// })
//
//
// export const {deleteLikeItem} = likeSlice.actions
// export default likeSlice.reducer