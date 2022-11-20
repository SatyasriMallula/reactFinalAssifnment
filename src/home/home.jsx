import React, { useState,useEffect } from "react";
import style from "./home.module.css"
import {useNavigate} from 'react-router-dom'
import LineChart from "../charts/firstchart";
import LineChart2 from "../charts/secondchart";
import Piechart from "../charts/piechart";
import Notification from "../notification/notification";
import Orders from "../orders/orders";
import { AiOutlineDashboard,AiOutlineFileDone,AiOutlineShoppingCart,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
function Home(){
  const [data,setData]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
     const response=await  fetch("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json")
          const res=await response.json();
         localStorage.setItem('data1',JSON.stringify(res))
          setData(res)}
          fetchdata()
         },[] )
  let localdata=JSON.parse(localStorage.getItem('data1'))
     console.log(localdata)
  

  
  const navigate=useNavigate()
    return(
        <div >
            <div id={style.main}>
                  <div className={style.mainnav}>
                    <div id={style.productdiv}><h1 id={style.product}>Product Admin</h1></div>
                    <div className={style.nav}>
                    <div className={style.nav_top} onClick={()=>navigate('/')} id={style.dashboard} ><AiOutlineDashboard className={style.icon}></AiOutlineDashboard><a href=""><li>Dashboard</li></a></div>
                      <div  className={style.nav_top} id={style.report}><AiOutlineFileDone className={style.icon} ></AiOutlineFileDone><a href=""><li>Reports
                        <select style={{width:"17px"}}>
                        
                          <option>Daily Report</option>
                          <option>Weekly Report</option>
                          <option>Yearly Report</option>
                        
                        </select>
                       </li></a></div>
                      <div  className={style.nav_top} id={style.pro} onClick={()=>navigate('/Products')}><AiOutlineShoppingCart   className={style.icon}></AiOutlineShoppingCart><a href=""><li>Products</li></a></div>
                      <div  className={style.nav_top} id={style.acc}><AiOutlineUser className={style.icon} ></AiOutlineUser><a href=""><li>Accounts</li></a></div>
                      <div  className={style.nav_top}><AiOutlineSetting className={style.icon}></AiOutlineSetting><a href=""><li>Settings<select style={{width:"17px"}}>
                   
                            <option>Profile</option>
                            <option>Billing</option>
                            <option>Customize</option>
                        
                        </select></li></a></div>
                      </div>
                      <a href="" id={style.login} onClick={()=>navigate('/admin')}>Admin,<b>Logout</b></a>
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