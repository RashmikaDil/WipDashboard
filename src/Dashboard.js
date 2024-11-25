import React, { useState } from "react";
import './index.css'
import CreateBin from "./dashboard_component/CreateBin";
import Home from "./dashboard_component/Home";
import ReadyBins from "./dashboard_component/ReadyBins";



function Dashboard(){

const [visibleComponent, setVisibleComponent] = useState('Home');

 return(
    <>
<div className="bodyContent">
    <div className="headerContent flex justify-center items-center">
        <h1 className="font-extrabold text-2xl">WIP DASHBOARD</h1>
    </div>
    <div className="sideContent p-2 items-center">
        <h1 className="text-bold text-2xl mb-10">LOGO</h1>

        <button className="menuItem" onClick={() => setVisibleComponent('Home')}>Home</button>
        <br/>    
        <button className="menuItem" onClick={() => setVisibleComponent('CreateBin')}>Create Bin</button>
        <br/>  
        <button className="menuItem" onClick={() => setVisibleComponent('ReadyBins')}>Ready Bins</button>

       
    </div>
    <div className="Content p-8">    
{visibleComponent === 'Home' && <Home/>}
{visibleComponent === 'CreateBin' && <CreateBin/>}
{visibleComponent === 'ReadyBins' && <ReadyBins/>}
 </div>
    <div className="footer"></div>
</div>

    </>
 )   
}
export default Dashboard;