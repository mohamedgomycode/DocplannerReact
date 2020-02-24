import React from "react";
import "./country.css";

const Country = props => {
  return (
     
    <div className="container-country">
      {props.data.map((el, i) => (
        <div key={i} className='shadow' >
          <div>
            <img src={el.image} />
          </div>
          <div className="flex">
            <p className='text'>{el.title}</p>

            <button className="button">{el.bouton}</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Country;
