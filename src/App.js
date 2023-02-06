import React from "react";
import {Routes, Route} from "react-router-dom"

import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog/Catalog";
import Return from "./pages/Return/Return";
import Pay from "./pages/Pay/Pay";
import Item from "./pages/Item/Item"
import Account from "./pages/Account/Account";
import Register from "./pages/Account/Register/Register";
import Authorization from "./pages/Account/Authorization/Authorization";
import Cart from "./pages/Cart/Cart";
import Likes from "./pages/Likes/Likes";


function App() {
  return (

    <div className="App">

      <Routes>


        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='catalog' element={<Catalog/>}/>
            <Route path='return' element={<Return/>}/>
            <Route path='pay' element={<Pay/>}/>
            <Route path='catalog/:id' element={<Item/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='like' element={<Likes/>}/>
        </Route>
          <Route path='/account' element={<Account/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Authorization/>}/>
      </Routes>

    </div>
  );
}

export default App;
