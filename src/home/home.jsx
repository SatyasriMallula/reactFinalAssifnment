import React, { useState,useEffect } from "react";
import style from "./home.module.css"
import {useNavigate} from 'react-router-dom'

import { AiOutlineDashboard,AiOutlineFileDone,AiOutlineShoppingCart,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
function Home(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
     const response=await  fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
          const res=await response.json();
         localStorage.setItem('data1',JSON.stringify(res))
         localStorage.setItem('accountsPage',JSON.stringify(res.accountsPage));
        localStorage.setItem(
          "dashboardPage",
          JSON.stringify(res.dasbhoardPage)
        );
        localStorage.setItem(
          "productsPage",
          JSON.stringify(res.productsPage)
        );
        localStorage.setItem(
          "products",
          JSON.stringify(res.productsPage.products)
        );
          setData(res)}
          fetchdata()
         },[] )
  let localdata=JSON.parse(localStorage.getItem('data1'))
  const prodata=JSON.parse(localStorage.getItem("productsPage"))
  const accdata=JSON.parse(localStorage.getItem("accountsPage"))
  console.log(prodata)
     console.log(localdata)
     console.log(accdata)
  
// const product=JSON.parse(localStorage.getItem("products"))
  
  const navigate=useNavigate()
  
    return(

        <div >
            <div id={style.main}>
                  <div className={style.mainnav}>
                    <div id={style.productdiv}><h1 id={style.product}>Product Admin</h1></div>
                    <div className={style.nav}>
                    <div className={style.nav_top} onClick={()=>navigate('/index')} id={style.dashboard} ><AiOutlineDashboard className={style.icon}></AiOutlineDashboard><a href=""><li>Dashboard</li></a></div>
                     
                      <div  className={style.nav_top} id={style.pro} onClick={()=>navigate('/Products') }><AiOutlineShoppingCart   className={style.icon}></AiOutlineShoppingCart><a href=""><li>Products</li></a></div>
                      <div  className={style.nav_top}onClick={()=>navigate('/account')} id={style.acc}><AiOutlineUser className={style.icon} ></AiOutlineUser><a href=""><li>Accounts</li></a></div>
                      
                      </div>
                      <a href="" id={style.login} onClick={()=>navigate('/')}>Admin,<b>Logout</b></a>
                  </div>
                  <div className={style.body}>
                  <div  className={style.body_first}>
                    
                     </div>
                  </div>
                
                
                
                 </div>
                 
                
                 
                 
          
        </div>
    )
}
export default Home