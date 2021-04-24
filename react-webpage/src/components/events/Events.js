import JNJD_1 from "../../assets/jnjd_pics/1.jpg";
import JNJD_2 from "../../assets/jnjd_pics/2.jpg";
import JNJD_3 from "../../assets/jnjd_pics/3.jpg";

const Events = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{ marginTop: "10em", marginBottom: "6em" }}
    >
      <h1 className="display-4 text-uppercase mb-5">
        Nos <span style={styleSpan}>événements</span>
      </h1>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div style={{ marginRight: "5rem", flex: 2 }}>
            <p className="display-4">IDEH</p>
            <p className="h5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quo quod impedit aperiam? Vitae enim, asperiores tempora sit
              soluta saepe consequuntur est omnis nihil provident nulla atque
              magnam nostrum quos sequi non quibusdam ipsum modi mollitia
              cupiditate porro corporis nam.
            </p>
          </div>
          <div style={{ flex: 1 }} className="text-center">
            {/* TODO Change to IDEH pics */}
            <img src={JNJD_1} style={{ width: "30em" }} alt="" />
            <img src={JNJD_2} style={{ width: "30em" }} alt="" />
          </div>
        </div>
        <img src={JNJD_3} style={{ width: "100%" }} alt="" />
      </div>
      <br />
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div style={{ marginLeft: "5rem", flex: 2, order: 1 }}>
            <p className="display-4">JNJD</p>
            <p className="h5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              quo quod impedit aperiam? Vitae enim, asperiores tempora sit
              soluta saepe consequuntur est omnis nihil provident nulla atque
              magnam nostrum quos sequi non quibusdam ipsum modi mollitia
              cupiditate porro corporis nam.
            </p>
          </div>
          <div style={{ flex: 1 }} className="text-center">
            <img src={JNJD_1} style={{ width: "30em" }} alt="" />
            <img src={JNJD_2} style={{ width: "30em" }} alt="" />
          </div>
        </div>
        <div className="d-flex">
          <img src={JNJD_3} style={{ width: "100%" }} alt="" />
        </div>
      </div>
    </div>
  );
};

const styleSpan = {
  color: "#11bbf5",
};

export default Events;
