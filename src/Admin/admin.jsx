import React from "react";
import { IconBase } from "react-icons";
import {useNavigate} from 'react-router-dom'
import style from './admin.module.css'
import { AiOutlineDashboard,AiOutlineFileDone,AiOutlineShoppingCart,AiOutlineUser,AiOutlineSetting } from 'react-icons/ai';
function Admin(){
    const navigate=useNavigate()
    
    return(
     <div id={style.main1}>
          <div id={style.main}>
                
           </div> 
           <div>
        <div className={style.Admin_main}>
            <div className={style.Admin}>
            
            <form>
                 <p>Welcome to Dashbord,Login</p>
                <label className={style.label}>Username</label><br/>
                <input type="text" className={style.usepass} required></input><br/>
                <label className={style.label}>Password</label><br/>
                <input type="text" className={style.usepass} required></input><br/>
                <button type="login"  className={style.log} onClick={()=>navigate('/')}>Login</button><br/>
                <button type="text"  className={style.log} onClick={()=>navigate('/')}>Forgot Your Password?</button>
            </form>
            </div>
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
export default Admin