
import React, { useEffect, useState } from "react";
import Admin from "./Admin/admin.jsx";
import Home from "./home/home.jsx";
import Index from "./home/index.jsx";
import Products from "./products/products.jsx";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Addnew from "./products/addnew.jsx";

function App() {
  return (
    
      <div className="App" style={{backgroundColor:"#567086",fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
        <BrowserRouter>
        <Home/>
        <Routes>
     <Route path='/' element={<Index/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path="/addnew" element={<Addnew/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
