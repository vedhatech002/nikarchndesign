import React from "react";
import Navigation from "./components/Naviagtion";
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About";
import BrandStory from "./components/BrandStory";
import ProjectsSlider from "./components/ProjectSlider";
import ProjectsCarousel from "./components/ProjectSlider2";
// import ProjectsScroll from "./components/ProjectSlider2";
// import ServicesSection from "./components/ServiceSection";
// import ServicesMinimal from "./components/ServiceSection";
// import ServicesSOM from "./components/ServiceSection";
// import ServicesSOMFlat from "./components/ServiceSection";
import ServicesSection from "./components/ServiceSection";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";
// import HeroCarousel from "./components/HeroCarousel";
// import About from "./components/About";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroCarousel />
      <BrandStory />
      <ProjectsCarousel />
      <ServicesSection />
      <Footer />
      {/* <ProjectsSlider /> */}
      {/* <About /> */}
    </div>
  );
}

export default App;
