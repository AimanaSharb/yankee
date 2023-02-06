import {configureStore} from "@reduxjs/toolkit";

import shop from './reducers/shop'
import oneItem from "./reducers/oneItem";
import users from "./reducers/users"
import cart from "./reducers/cart"
import like from "./reducers/like"

export const store= configureStore({
    reducer:{
        shop,
        oneItem,
        users,
        like,
        cart



    }
})