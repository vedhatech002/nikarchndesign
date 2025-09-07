import React from "react";
import Navigation from "./components/Naviagtion";
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About";
// import Navigation from "./components/Navigation";
// import HeroCarousel from "./components/HeroCarousel";
// import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <About />
    </div>
  );
}

export default App;
