import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Events from "./components/Events";

const App = () => {
  return (
    <div>
      <Home />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* Add more routes as needed */}
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
