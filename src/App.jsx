import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Naviagtion";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollToTop />
      <main>
        <Outlet /> {/* route children render here: Home, About, etc */}
      </main>
      <Footer />
    </div>
  );
}
