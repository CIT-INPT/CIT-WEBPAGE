import React from "react";
import Hero from "./hero";
import AboutUs from "./about_us";
import NosCellules from "./nos_cellules";
import NosPartenaires from "./nos_partenaires";
import Temoignages from "./temoignages";
import Sidebar from "../layout/sidebar";

// TODO A changer, aykhsskom tsawbo plusieurs composants, machi b darora tktbo style kif ktebt hna
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <NosCellules />
      <NosPartenaires />
      <Temoignages />
      <Sidebar/>
    </div>
  );
};

export default Home;
