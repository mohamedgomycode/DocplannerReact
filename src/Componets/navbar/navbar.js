import React from "react";
import Logo from "../../assets/doc.svg";
import "./navbar.css"
const Nav = () => {
  return (
    <div className="container">
      <div className="logo">
         <img src={Logo} className="logo" />
      </div>
      
     <div className="liste">
         <div className='items'>About us</div>
         <div className='items'>Career</div>
         <div className='items'>Departments</div>
     </div>
    </div>
  );
};
export default Nav;
