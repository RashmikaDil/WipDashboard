import Wipcard from "./Wipcard";
import React from "react";
import './index.css'
import WipData from "./WipData";
import SideMenu from "./SideMenu";


function Dashboard(){


 return(
    <>
<div className="bodyContent">
    <div className="headerContent flex justify-center items-center">
        <h1 className="font-extrabold text-2xl"> SUPER MARCKET : WIP DASHBOARD</h1>
    </div>
    <div className="sideContent p-2 items-center">
        <h1 className="text-bold text-2xl mb-10">LOGO</h1>
        <SideMenu btn_name='Create'>Create</SideMenu>
    </div>
    <div className="Content p-8">    

    
{WipData.map((TR , index)=>(
<Wipcard  Data={TR}  key={index}/>
    ))}


 </div>
    <div className="footer"></div>
</div>

    </>
 )   
}
export default Dashboard;