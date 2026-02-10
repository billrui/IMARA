import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import WaterFooter from "./components/WaterFooter";

function App() {

  // ⭐ Smooth Scroll Setup (Whole Website + Phones)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smooth: true,
      smoothTouch: true, // VERY important for mobile
      touchMultiplier: 1.1
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
