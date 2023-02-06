import {createSlice} from "@reduxjs/toolkit"







const cartSlice =  createSlice({
    name:"cart",
    initialState:{
        cart:[1, 2],
        dataLength:0,
        status:'',
        error:''
    },
    reducers:{

        addItemsInCart:(state, action)=>{

            const ItemsInCart = state.cart.find((item)=>item.id === action.payload.id)
            if (ItemsInCart){
                ItemsInCart.quantity++;
            }else{
                state.cart.push({...action.payload, quantity:1})
            }
        }
    },
    extraReducers:{

    }

})


export const {addItemsInCart} = cartSlice.actions
export default cartSlice.reducer

