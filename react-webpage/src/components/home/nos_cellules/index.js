import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaCode,
  FaUserSecret,
  FaMobileAlt,
  FaPencilRuler,
  FaUsers,
  FaWrench,
  FaBullhorn,
} from "react-icons/fa";

const NosCellules = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      id="nos_cellules"
    >
      <h1 className="display-4 text-uppercase mb-5">
        nos <span style={styleSpan}>cellules</span>
      </h1>
      <div className="row mb-3">
        <ItemCellule desc="Cellule Algorithmique">
          <FaLaptop className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
        <ItemCellule desc="Cellule Web">
          <FaCode className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
        <ItemCellule desc="Cellule Securité">
          <FaUserSecret className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
        <ItemCellule desc="Cellule Mobile">
          <FaMobileAlt className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
      </div>
      <div className="row mb-3">
        <ItemCellule desc="Cellule Design">
          <FaPencilRuler className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
        <ItemCellule desc="Cellule Médiatisation">
          <FaBullhorn className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
        <ItemCellule desc="Cellule Technique">
          <FaWrench className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
        <ItemCellule desc="Cellule Prospection">
          <FaUsers className=" text-center" size="50px" color="#0a4996" />
        </ItemCellule>
      </div>
      <div className="row">
        <Link
          type="button"
          class="btn btn-dark button"
          style={{ backgroundColor: "#0a4996" }}
          to="/about"
        >
          VOIR PLUS
        </Link>
      </div>
    </div>
  );
};

const ItemCellule = ({ desc, children }) => {
  return (
    <div className="col-3">
      <div className="d-flex flex-column align-items-center">
        {children}
        <label className="text-center my-1 ">{desc}</label>
      </div>
    </div>
  );
};

const styleSpan = {
  color: "#11bbf5",
};

export default NosCellules;
