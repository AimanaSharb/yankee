import React from "react";
import {Routes, Route} from "react-router-dom"

import Layout from "./Layout/Layout"
import Home from "./pages/Home/Home"
import Catalog from "./pages/Catalog/Catalog";


function App() {
  return (

    <div className="App">

      <Routes>


        <Route path='/' element={<Layout/>}>
            <Route path='' element={<Home/>}/>
            <Route path='catalog' element={<Catalog/>}/>

        </Route>
      </Routes>

    </div>
  );
}

export default App;
