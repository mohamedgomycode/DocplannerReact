import React from "react";
import "./Information.css";
import Logo from "../../assets/doc1.png";

const Information = props => {
  return (
    <div >
      <div className="Container-info">
        <div className="small-container">
          <h1 className="h1info">The world's biggest healthcare platform</h1>
          <p className="P-info">
            We work from 6 offices all over the world, bringing Docplanner Group
            to life in almost 20 countries.
          </p>
          <img src={Logo} className="logo2" />
        </div>

        <div className="style-boxes">
          <div className="info-box">
            {props.data.map((el, i) => (
              <div className="box-white" key={i} style={{marginTop: el.isLower ? '20px' : '6px' }}>
                <center>
                  <div>
                    <img src={el.log} />
                  </div>
                  <div>
                    <h3 className="h3">{el.title}</h3>
                  </div>
                  <div>
                    <p className='paraa'>{el.para}</p>
                  </div>
                </center>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
     <div className='last'> <center>
    
        <h1 className="h1-inf">
        
          Improve the lives of millions. Change yours
        </h1>
        <p className="p-inf">
          forever More than 1000 team mates share our same vision, goals and
          passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico
          City and Curitiba, our search for great talent never stops.
        </p>
      </center></div>
    </div>
  );
};
export default Information;
