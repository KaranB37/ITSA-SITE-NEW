import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Events from "./components/Events";
import About from "./components/About";
import Vission_Mission from "./components/Vission_Mission";
const App = () => {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/Vission_Mission" element={<Vission_Mission />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
