const Contact = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{ marginTop: "6em", marginBottom: "6em" }}
    >
      <h1 className="display-4 text-uppercase mb-5">
        contactez <span style={styleSpan}>nous</span>
      </h1>
      <div className="d-flex align-items-center justify-content-between">
        <div style={{ flex: 2 }}>
          <p className="display-4">IDEH</p>
          <p className="h5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quo quod impedit aperiam? Vitae enim, asperiores tempora sit soluta
            saepe consequuntur est omnis nihil provident nulla atque magnam
            nostrum quos sequi non quibusdam ipsum modi mollitia cupiditate
            porro corporis nam.
          </p>
        </div>
        <div style={{ flex: 1 }} className="text-center">
          {/* TODO Change to ideh pics */}
          <div style={{ backgroundColor: "red" }}>test</div>
        </div>
      </div>
      <br />
      <div className="d-flex align-items-center">
        <div style={{ flex: 2, order: 1 }}>
          <p className="display-4">JNJD</p>
          <p className="h5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quo quod impedit aperiam? Vitae enim, asperiores tempora sit soluta
            saepe consequuntur est omnis nihil provident nulla atque magnam
            nostrum quos sequi non quibusdam ipsum modi mollitia cupiditate
            porro corporis nam.
          </p>
        </div>
        <div style={{ flex: 1 }} className="text-center">
          {/* TODO Change to jnjd pics */}
          <div style={{ backgroundColor: "red" }}>test</div>
        </div>
      </div>
    </div>
  );
};

const styleSpan = {
  color: "#11bbf5",
};

export default Contact;
