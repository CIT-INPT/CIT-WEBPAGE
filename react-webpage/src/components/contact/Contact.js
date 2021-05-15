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
      <div className="col-8">
        <div className="card card-0">
          <form>
            <div class="form-group mb-3">
              <h3 className="font-weight-bold mb-3">Nom :</h3>{" "}
              <input type="text" class="form-control" placeholder="Votre nom" />
            </div>
            <div class="form-group mb-3">
              <h3 className="font-weight-bold mb-3">Email :</h3>{" "}
              <input
                type="email"
                class="form-control"
                placeholder="Votre email"
              />
            </div>
            <div class="form-group mb-3">
              <h3 className="font-weight-bold mb-3">Sujet :</h3>{" "}
              <input
                type="text"
                class="form-control"
                placeholder="Votre sujet"
              />
            </div>{" "}
            <div class="form-group mb-3">
              <h3 className="font-weight-bold mb-3">Message :</h3>{" "}
              <textarea
                class="form-control"
                placeholder="Votre message"
                style={{ minHeight: "10em" }}
              ></textarea>
            </div>
            <button
              type="submit"
              class="btn btn-light"
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
