import "./index.css";

const Temoignages = () => {
  return (
    <div className="py-4">
      <div
        className="container d-flex flex-column align-items-center"
        style={{
          marginTop: "6em",
          marginBottom: "6em",
        }}
      >
        <h1 className="display-4 text-uppercase mb-5">
          <span style={styleSpan}>Témoignages</span>
        </h1>
        <div className="row">
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </div>
    </div>
  );
};

const CardItem = () => {
  return (
    <div className="col-4">
      <div className="card border-0 card-0">
        <div className="text-center">
          {" "}
          <img
            src="https://avatars.dicebear.com/api/male/azerty.svg"
            class="img-fluid profile-pic"
            alt="person"
          />{" "}
        </div>
        <h6 className="font-weight-bold mt-5">Une personne</h6>{" "}
        <small className="mb-2">Son poste</small>
        <hr width="50%" />
        <p className="content mt-2 mb-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua.
          <br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
  );
};

const styleSpan = {
  color: "#11bbf5",
};

export default Temoignages;
