import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/footer/index";
import Navbar from "./components/layout/navbar/index";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Partners from "./components/partners/Partners";
import Events from "./components/events/Events";
import Contact from "./components/contact";

// On définit hna la structure de l'app
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        {/* Les routes + les composants hna à définir */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/partners" component={Partners} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contact" component={Contact} />
      </Routes>
      {/* Le footer à changer */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
