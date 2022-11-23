import React, { useState,useEffect} from "react";
import style from './products.module.css'
// import {BiCloudUpload} from 'react-icons/bi'
 function AddnewCat(){  
 
  const [productlist, setProductlist] = useState([]);
  const [modal, setModal] = useState(false);

  const [category, setCategory] = useState("");
  

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
  },[]);

  const addProductHandler = () => {
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    console.log("before addding product:", obj);

    if (
      category === "" 
    ) {
      alert("Please enter all details for product");
      return;
    }
  else{
    obj.categories.push(category);

    console.log("after addding product:", obj);

    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["categories"]
    );
    setModal(false);
  }};
  
 
  
    return(
        <div>
            <div className={style.addnewdiv}>
             
                <form id={style.addform} className={style.newcat} >
                   
                <p id={style.addp}>Add Category</p>
                <label className={style.addlabel}>Category  Name</label><br></br>
                <input type="text"   id={style.addinput1}  onChange={(e) => setCategory(e.target.value)}
              value={category} required ></input><br></br>
                <button type="submit" id={style.addpronow} onClick={addProductHandler}> ADD Category NOW</button>
                </form>
            </div>
            <div className={style.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
        </div>
    )
}
export default AddnewCat