import React from "react";
import LineChart from "../charts/firstchart";
import LineChart2 from "../charts/secondchart";
import Piechart from "../charts/piechart";
import Notification from "../notification/notification";
import Orders from "../orders/orders";
import style from "./home.module.css"
import Home from "./home";
function Index(){
    return(
    <div>
       
      < div className={style.charts}>
                  
                  <LineChart/>
                  <LineChart2/>
                  <Piechart/>
                  <Notification/>
                 
                </div> 
                <Orders/>
                <div className={style.footer}>
                <footer>
                    <p>Copyright © 2018 All rights reserved. Design: Template Mo</p>
                </footer>
               </div>
    </div>)
}
export default Index