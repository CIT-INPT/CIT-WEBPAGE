import "./index.scss";

const Contact = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{ marginTop: "200px", marginBottom: "6em" }}
    >
      <h1 className="display-4 text-uppercase mb-3 contacttitle">
        contactez <span style={styleSpan}>nous</span>
      </h1>
      <div className="col-8" style={{position:"relative"}}>
        <div className="bluerect"></div>
        <div className="card contactcard">
          <form>
            <div class="form-group mb-3">
              <input type="text" class="form-control contactinput" placeholder="Nom" />
            </div>
            <div class="form-group mb-3">
              <input
                type="email"
                class="form-control contactinput"
                placeholder="Email"
              />
            </div>
            <div class="form-group mb-3">
              <input
                type="text"
                class="form-control contactinput"
                placeholder="Sujet"
              />
            </div>{" "}
            <div class="form-group mb-3">
              <textarea
                class="form-control contactinput"
                placeholder="Message"
                style={{ minHeight: "10em" }}
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn contactbutton"
              style={{ width: "100%" }}
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const styleSpan = {
  color: "#11bbf5",
};

export default Contact;
