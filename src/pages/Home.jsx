import React from "react";
import HeroCarousel from "../components/HeroCarousel";
import BrandStory from "../components/BrandStory";
import ProjectsCarousel from "../components/ProjectSlider2";
import ServicesSection from "../components/ServiceSection";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <BrandStory />
      <ProjectsCarousel />
      <ServicesSection />
    </>
  );
};

export default Home;
