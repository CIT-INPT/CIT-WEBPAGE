import {
  FaBullhorn,
  FaCode,
  FaLaptop,
  FaMobileAlt,
  FaPencilRuler,
  FaUsers,
  FaUserSecret,
  FaWrench,
} from "react-icons/fa";

const NosCellules = () => {
  return (
    <div
      className="py-3"
      style={{ backgroundColor: "#21354d", color: "white" }}
    >
      <div
        className="container d-flex flex-column align-items-center"
        style={{
          marginTop: "6em",
          marginBottom: "6em",
        }}
      >
        <h1 className="display-4 text-uppercase mb-5">
          nos <span style={styleSpan}>cellules</span>
        </h1>
        <ItemCellule desc="cellule algorithmique" ord={2}>
          <FaLaptop style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
        <br/>
        <ItemCellule desc="Cellule Web">
          <FaCode style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
        <br/>
        <ItemCellule desc="Cellule Securité" ord={2}>
          <FaUserSecret style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
        <br/>
        <ItemCellule desc="Cellule Mobile">
          <FaMobileAlt style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
        <br/>
        <ItemCellule desc="Cellule Design" ord={2}>
          <FaPencilRuler style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
        <br/>
        <ItemCellule desc="Cellule Médiatisation">
          <FaBullhorn style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
        <br/>
        <ItemCellule desc="Cellule Technique" ord={2}>
          <FaWrench style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
        <br/>
        <ItemCellule desc="Cellule Prospection">
          <FaUsers style={{ flex: 1 }} size="130px" color="#11bbf5" />
        </ItemCellule>
      </div>
    </div>
  );
};

const ItemCellule = ({ desc, children, ord }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      <div style={{ flex: 2, order: ord }}>
        <p className="h3 text-uppercase">{desc}</p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
          error aut suscipit, ipsam, deserunt enim numquam possimus natus libero
          ipsum culpa facere, repudiandae aliquam. Eius, obcaecati. Dolores
          adipisci expedita nobis, perspiciatis voluptates sapiente, atque
          consectetur consequatur blanditiis nulla quam praesentium!
        </p>
      </div>
      {children}
    </div>
  );
};

const styleSpan = {
  color: "#11bbf5",
};

export default NosCellules;
