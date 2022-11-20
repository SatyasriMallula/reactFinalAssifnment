import React, { useState} from "react";
import style from './products.module.css'
// import {BiCloudUpload} from 'react-icons/bi'
 function Addnew(){
  
   const [data,setdata]=useState({
    name:"",
    category:"",
    description:"",
    unitSold:"",
    stock:"",
    expireDate:""
   })
   function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setdata(newdata)
    console.log(newdata)

   }
   
  
    function submit(e){
        e.preventDefault()
        
           
                  const res= data.json();
                 localStorage.setItem('data1',JSON.stringify(res))
                 
              

    }
    return(
        <div>
            <div className={style.addnewdiv}>
             
                <form id={style.addform} onSubmit={(e)=>submit(e)}>
                   
                <p id={style.addp}>Add Product</p>
                <label classname={style.addlabel}>Product Name</label><br></br>
                <input type="text" onChange={(e)=>handle(e) }  id={style.addinput1} required></input><br></br>
                <label classname={style.addlabel}>Description</label><br></br>
                <textarea cols='48' rows='7' onChange={(e)=>handle(e)}   id={style.addtext} required></textarea><br></br>
                <label classname={style.addlabel}>Category</label><br></br>
                <select id={style.addinput2} onChange={(e)=>handle(e)}  required >
                
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
                <input type="date" id={style.adddate} onChange={(e)=>handle(e)} required></input><br></br>
                <label classname={style.addlabel}>Unit Sold</label><br></br>
                <input type="number" id={style.addnum} onChange={(e)=>handle(e)}  required></input><br></br>
                <label classname={style.addlabel}>Units In Stock</label><br></br>
                <input type="number" id={style.addnum} onChange={(e)=>handle(e)}  required ></input><br></br>
          
                {/* <div>
             
                   <br>
                    </br>
                    <i> <BiCloudUpload /></i><input type="file" accept='image/*' ></input><br></br>
                   <button> <input input type="file" accept='image/*' ></input></button>
                </div> */}
            
                <button type="submit" id={style.addpronow}> ADD PRODUCT NOW</button>
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