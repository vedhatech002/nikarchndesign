import React, { useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import BrandStory from "../components/BrandStory";
import ProjectsCarousel from "../components/ProjectSlider2";
import ServicesSection from "../components/ServiceSection";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.querySelector(location.state.scrollTo);
      if (el) {
        // small delay ensures DOM is ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
      }
    }
  }, [location]);
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
