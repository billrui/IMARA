
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import WaterFooter from "./components/WaterFooter";

function App() {
  return (
    <div className="relative">
      {/* Navbar always visible */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Contact Section */}
      <Contact />

      {/* Social bar */}
      <SocialBar />

      {/* Water footer / wave effect */}
      <WaterFooter />
    </div>
  );
}

export default App;
