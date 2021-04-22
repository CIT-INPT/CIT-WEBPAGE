const membres = [
  { name: "Chaymae ELJOUHARI", role: "Présidente", img: "" },
  { name: "Ilham BENNAR", role: "Vice-présidente", img: "" },
  { name: "Amine RACHYD", role: "Secrétaire général", img: "" },
  { name: "Mohamed KOUHOU", role: "Trésorier", img: "" },
  {
    name: "Mohammed LAHSINI",
    role: "Chef de cellule - Algorithmique",
    img: "",
  },
  { name: "Khalid ELGAMOUS", role: "Chef de cellule - Web", img: "" },
  { name: "Oussama RAHALI", role: "Chef de cellule - Sécurité", img: "" },
  { name: "Omar AOUAJ", role: "Co-chef de cellule - Sécurité", img: "" },
  { name: "Hanane CHARIF EL ASRI", role: "Chef de cellule - Mobile", img: "" },
  {
    name: "Walid ELASS",
    role: "Chef de cellule - Design | Médiatisation",
    img: "",
  },
  { name: "Brahim LQATI", role: "Chef de cellule - Technique", img: "" },
  { name: "Hajar AIT IDDIR", role: "Chef de cellule - Prospection", img: "" },
];

const MembresExecutifs = () => {
  return (
    <div
      className="container d-flex flex-column align-items-center"
      style={{ marginTop: "6em", marginBottom: "6em" }}
    >
      <h1 className="display-4 text-uppercase mb-5">Membres executifs</h1>
      <div className="row">
        {membres.map((m) => (
          <CardItem infos={m} />
        ))}
      </div>
    </div>
  );
};

const CardItem = ({ infos }) => {
  const { name, role, img } = infos;
  return (
    <div className="col-4">
      <div className="card card-0">
        <div className="text-center">
          {" "}
          <img
            src="https://avatars.dicebear.com/api/male/azerty.svg"
            class="img-fluid profile-pic"
            alt="person"
          />{" "}
        </div>
        <h3 className="font-weight-bold text-center mt-5">{name}</h3>{" "}
        <h6 className="font-weight-bold text-center mt-2">{role}</h6>{" "}
      </div>
    </div>
  );
};

export default MembresExecutifs;
