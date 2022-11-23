import React, { useState,useEffect} from "react";
import style from './products.module.css'
// import {BiCloudUpload} from 'react-icons/bi'
 function Addnew(){  
 
  const [productlist, setProductlist] = useState([]);
  const [selected, setSelected] = useState([]);
  const [modal, setModal] = useState(false);

  const [category, setCategory] = useState("");
  const [description, setdescription] = useState("");
  const [expireDate, setexpireDate] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [unitSold, setUnitSold] = useState("");

  useEffect(() => {
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  }, [productlist]);

  const deleteHandler = (e) => {
    console.log(e.target.id);
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    let productsData = obj["products"];

    let productsAfterDelete = productsData.filter(
      (item) => item.name !== e.target.id
    );
    obj = {
      ...obj,
      products: productsAfterDelete,
    };
    localStorage.setItem("productsPage", JSON.stringify(obj));

    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
  };

  const addNewProduct = () => {
    setModal(true);
  };

  const addProductHandler = () => {
    let obj = JSON.parse(localStorage.getItem("productsPage"));
    console.log("before addding product:", obj);

    if (
      category === "" ||
      description === "" ||
      expireDate === "" ||
      name === "" ||
      stock === "" ||
      unitSold === ""
    ) {
      alert("Please enter all details for product");
      return;
    }
      else{
    obj.products.push({
      category: category,
      description: description,
      expireDate: expireDate,
      name: name,
      stock: stock,
      unitSold: unitSold,
    })};

    console.log("after addding product:", obj);

    localStorage.setItem("productsPage", JSON.stringify(obj));
    setProductlist(
      JSON.parse(localStorage.getItem("productsPage"))["products"]
    );
    setModal(false);
  };
  
    const selectDeleteHandler = (e) => {
      e.preventDefault();
    };
  
    return(
        <div>
            <div className={style.addnewdiv}>
             
                <form id={style.addform} >
                   
                <p id={style.addp}>Add Product</p>
                <label className={style.addlabel}>Product Name</label><br></br>
                <input type="text"   id={style.addinput1}  onChange={(e) => setName(e.target.value)}
              value={name} required ></input><br></br>
                <label classname={style.addlabel}>Description</label><br></br>
                <textarea cols='48' rows='7'  id={style.addtext} required onChange={(e) => setdescription(e.target.value)}
              value={description}></textarea><br></br>
                <label classname={style.addlabel}>Category</label><br></br>
                <select id={style.addinput2} onChange={(e) => setCategory(e.target.value)}
              value={category} required >
                
                    <optgroup>
                        <option>select Category</option>
                        <option>New Arrival</option>
                        <option>Latest Fashion</option>
                        <option>Trending</option>
                        <option>Christmas Special</option>
                        <option>New Year Special</option>
                    </optgroup>
                </select><br></br>
                <label classname={style.addlabel}>Expire Date</label><br></br>
                <input type="date" id={style.adddate}  onChange={(e) => setexpireDate(e.target.value)}
              value={expireDate} required></input><br></br>
                <label classname={style.addlabel}>Unit Sold</label><br></br>
                <input type="number" id={style.addnum} onChange={(e) => setUnitSold(e.target.value)}
              value={unitSold}  required></input><br></br>
                <label classname={style.addlabel}>Units In Stock</label><br></br>
                <input type="number" id={style.addnum}  onChange={(e) => setStock(e.target.value)}
              value={stock}  required ></input><br></br>
          
                {/* <div>
             
                   <br>
                    </br>
                    <i> <BiCloudUpload /></i><input type="file" accept='image/*' ></input><br></br>
                   <button> <input input type="file" accept='image/*' ></input></button>
                </div> */}
            
                <button type="submit" id={style.addpronow} onClick={addProductHandler}> ADD PRODUCT NOW</button>
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
export default Addnew