import React from "react";
import "./visitecard.css";

const Visitecars = ({ data }) => {
  return (
    <div className="visite-card-container">
      {data.map(el => (
        <div key={el.title} className="box-container" >
          <p className='paragraph'>{el.paragraph}</p>
          <div className="box" style={{backgroundColor: el.color}}>
                        <div className="title">{el.title} </div>
                        <div className='description'> {el.description} </div>
                        <div className='select-image'>
                           {el.select && <div> 
                                <select className="select">
                                    <option>Choose country </option>
                                    <option>Tunisia </option>
                                    <option>Brasil </option>
                                    <option>French</option>
                                </select>
                                 </div>}
                            <div className="image-box"> <img  src={el.image}/> </div>
                             </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Visitecars;
