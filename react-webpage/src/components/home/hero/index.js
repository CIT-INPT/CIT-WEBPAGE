import { Link } from "react-router-dom";
import HeartIcon from "../../../assets/HeartIcon";
import citlogo from "./../../../assets/citlogo.svg";
import "./index.scss";
import LineCircle from "./../../../assets/line_circle.svg";
const Hero = () => {
  return (
    <div id="hero">
    <div className="hero" >
      <div className="container">
        <div class="row">
          <div class="col-8 slogancontainer">
            <h2 className="slogan">
              A short <span className="cyancolor">description</span> about CIT
              INPT (or slogan)
            </h2>
            <Link to="/about" className="btn btn-light button">
              Voir plus
            </Link>
            {/* <button type="button" class="btn btn-light button"></button> */}
          </div>
          <div class="col-4 imagecontainer">
            <img className="image" src={citlogo} alt="Cit Logo" width={350} />
          </div>
        </div>
      </div>
    </div>
    <div className="wepresent">
          
          

                    <div className="container rectangle" >
                    <div className="lineCircle" >
                                <img src={LineCircle} width="200" alt="line circle icon" />
                        </div>
                        <h2 className="titles">
                            We'd <HeartIcon width="50" /> to present ourselves
                        </h2>
                        <h2 className="titles">
                            Don't forget to reach out too!
                        </h2>
                    </div>
        </div>
    </div>
  );
};

export default Hero;
