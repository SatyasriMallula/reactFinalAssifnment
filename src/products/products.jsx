import React from "react";
import style from "./products.module.css"
import {FaRegTrashAlt} from 'react-icons/fa'
import Addnew from "./addnew";
import {useNavigate} from 'react-router-dom'


function Products(){
    const navigate=useNavigate()
    let localdata=JSON.parse(localStorage.getItem('data1'))
    return(
        <div>
           <div className={style.promain}>
            <div className={style.products}>
                <div  className={style.scroll}>
                <table id={style.table}>
                    <tr> 
                        <th></th>
                        <th> PRODUCT NAME</th>
                        <th>CATOEGORY</th>
                        <th>DESCRIPTION</th>
                        <th>UNIT SOLD</th>
                        <th>IN STOCK</th>
                        <th>EXPIRE DATE</th>
                        <th></th>
                        </tr>
                   {
                    localdata.productsPage.products.map(e=>
                      <tr className={style.tr}>
                        <td className={style.tr}><button type="radio" id={style.click} ></button></td>
                        <td className={style.tr}>{e.name}</td>
                        <td className={style.tr}>{e.category}</td>
                        <td className={style.tr}>{e.description}</td>
                        <td className={style.tr}>{e.unitSold}</td>
                        <td className={style.tr}>{e.stock}</td>
                        <td className={style.tr}>{e.expireDate}</td>
                        <td className={style.tr}><FaRegTrashAlt id={style.ico}/></td>
                        </tr> 
                    
                      )
                   }
                 
                </table>
                </div>
                <button className={style.add} onClick={()=>navigate('/addnew')}>ADD NEW PRODUCT</button><br></br>
                   <button  className={style.add}>DELETE SELECTED PRODUCTS</button>
            </div>
            <div id={style.smalltab}>
                <div id={style.st}>
                <p>Product Categorys</p>
                <table>
                    <tr>
                        <th className={style.str}>Product Categories</th>
                        <th></th>
                    </tr>
                    {
                    localdata.productsPage.categories.map(e=>
                        <tr className={style.str}>
                            <td className={style.str}>{e}</td>
                           <td className={style.str}><FaRegTrashAlt id={style.ico1}/></td>
                        </tr>
                        )
                 
                    }
              
                </table>
               
                </div>
                <button className={style.add1} >ADD NEW PRODUCT</button>
            </div>
           </div>
           <div className={style.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
        </div>
    )
}
export default Products