
import React, { useEffect, useState } from "react";
import Admin from "./Admin/admin.jsx";
import Home from "./home/home.jsx";
import Index from "./home/index.jsx";
import Products from "./products/products.jsx";
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Addnew from "./products/addnew.jsx";
import Account from "./account/Account.jsx";
import AddnewCat from "./products/addnewcategory.jsx";

function App() {
  return (
    
      <div className="App" style={{backgroundColor:"#567086",fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
        <BrowserRouter>
        <Home/>
        <Routes>
        <Route path='/'  element={<Admin/>}/>
     <Route path='/index' element={<Index/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path="/addnew" element={<Addnew/>}/>
     <Route path="/account" element={<Account/>}></Route>
     <Route path="/addnewcat" element={<AddnewCat/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
