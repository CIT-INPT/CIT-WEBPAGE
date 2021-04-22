import React from "react";
import AboutUs from "../home/about_us";
import MembresExecutifs from "./membres_exec";
import NosCellules from "./nos_cellules";

// TODO A changer, aykhsskom tsawbo plusieurs composants, machi b darora tktbo style kif ktebt hna
const About = () => {
  return (
    <div>
      <AboutUs />
      <NosCellules />
      <MembresExecutifs />
    </div>
  );
};

export default About;
