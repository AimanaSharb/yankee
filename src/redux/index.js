import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shop from './reducers/shop'
import oneItem from "./reducers/oneItem";
import users from "./reducers/users"
import cart from "./reducers/cart"


const rootReducer = combineReducers({
    shop,
    users,
    oneItem,
    cart

})

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


 const store= configureStore({
    reducer:persistedReducer,
     middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware({
             serializableCheck: false,
         }),

})

export const persistor = persistStore(store)


export default store;
