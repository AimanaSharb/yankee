import React from 'react';
import {Route,Routes} from "react-router-dom";
import Register from "../pages/Account/Register/Register"
import Login from "../pages/Account/Authorization/Authorization";
import NotFound from "../pages/Account/Forgot/Forgot";

const AuthRouting = () => {
    return (
        <Routes>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    );
};

export default AuthRouting;