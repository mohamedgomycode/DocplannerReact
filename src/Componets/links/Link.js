import React from "react";
import "./Link.css";
import Logo from "../../assets/doc1.png";
const Link = () => {
  return (
  <div className="Container-links">
   
      <h1 className='h1'>We are a global company with local culture</h1>
  
    <div className='stylelinks'>
     
            
               <div className="liste"> <img src={Logo} className="logo1"  /> <li>ZnanyLekarz</li></div>
               <div className="liste"> <img src={Logo} className="logo1"  /> <li>DoctoraLia</li></div>
               <div className="liste"> <img src={Logo} className="logo1"  /> <li>MioDottore</li></div>
               <div className="liste"> <img src={Logo} className="logo1"  /> <li>DoctoTakvimi</li></div>
       
        
    </div>
  </div>)
};
export default Link;
