import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from 'axios'
import {useSelector} from "react-redux";

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async(filter,{rejectWithValue})=>{
        try {
            const res = await axios(`http://localhost:4444/users`)
            if(res.statusText !== 'OK'){
                throw new Error('Server error')
            }
            return res.data
        } catch (err) {
            return rejectWithValue(err.message)
        }
    }

)


const usersSlice = createSlice({
    name:"users",
    initialState:{
        users:{
            email:''
        },
        error:'',
        status:''
    },
    reducers: {

        loginAccount: (state, action) =>{
            state.users=action.payload
        },
        logoutAccount:(state, action)=>{
            state.users={
                email: ''

            }
        }

    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'loading'
            state.error = ''
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'error'
            state.error = action.payload
        },
        [getUsers.fulfilled]: (state, action) => {
            state.status = 'resolve'
            state.error = ''
            state.users = action.payload
        }

    }
})





export const {loginAccount, logoutAccount} = usersSlice.actions
export default usersSlice.reducer