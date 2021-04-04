import React from "react";
import citlogo from "./../../../assets/citlogo.svg";
import "./index.scss"

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div class="row">
          <div class="col-8 slogancontainer">
            <h2 className="slogan">A short <span className="cyancolor">description</span> about CIT INPT (or slogan)</h2>
            <button type="button" class="btn btn-light button">BUTTON HERE</button>
          </div>
          <div class="col-4 imagecontainer">
            <img className="image" src={citlogo} alt="Cit Logo" width={350} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 