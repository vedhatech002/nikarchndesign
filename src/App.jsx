import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Naviagtion";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Outlet /> {/* route children render here: Home, About, etc */}
      </main>
      <Footer />
    </div>
  );
}
