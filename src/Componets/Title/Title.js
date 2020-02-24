import React from "react" 
import Logo from "../../assets/doc1.png"
import "./Title.css"
const Title=()=>{
    return(
 <div className="title-container">
      <div className="title-logo-container"> <img src={Logo} className="logo-container"  /></div>
      <div className="h1style"><h1>Making the healthcare experience more human</h1></div>
 </div>
    )
}
export default Title