import React from "react";
import Hero from "./hero"
// TODO A changer, aykhsskom tsawbo plusieurs composants, machi b darora tktbo style kif ktebt hna
const Home = () => {
  return <div style={homeStyle}>
    <Hero/>

  </div>;
};

const homeStyle = { backgroundColor: "orange" };

export default Home;
