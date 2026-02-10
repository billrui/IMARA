import { useEffect, useState } from "react";
import WaterFooter from "./WaterFooter";
import HeroImage from "../assets/Home.jpg";

export default function Hero() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const triggerFade = () => {
      setStep(0);
      setTimeout(() => setStep(1), 100);
      setTimeout(() => setStep(2), 300);
      setTimeout(() => setStep(3), 500);
    };

    triggerFade();
    window.addEventListener("heroFade", triggerFade);
    return () => window.removeEventListener("heroFade", triggerFade);
  }, []);

  const handleRequestService = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center
                 text-white pt-28 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            to bottom,
            rgba(255,255,255,0.35),
            rgba(30,58,138,0.55),
            rgba(13,148,136,0.55),
            rgba(22,163,74,0.5)
          ),
          url(${HeroImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="relative z-10
                   w-full max-w-4xl
                   mx-auto
                   px-4 sm:px-6 md:px-8
                   py-10 sm:py-14 md:py-16
                   bg-white/20 backdrop-blur-xl rounded-3xl
                   shadow-2xl text-center"
      >
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
                      font-semibold mb-4
                      text-blue-900
                      transition-all duration-700 ease-out
                      ${step >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Imara Analytical Laboratories
        </h1>

        <p
          className={`mb-6 sm:mb-8 text-sm sm:text-base md:text-lg lg:text-xl
                      text-black
                      leading-relaxed
                      transition-all duration-700 ease-out
                      ${step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Reliable & Affordable Laboratory Testing Services <br />
          Soil, Water, Fertilizer, Plant Tissue, Food & Animal Feed Analysis
        </p>

        <button
          onClick={handleRequestService}
          className={`inline-flex items-center justify-center
                     px-6 sm:px-8 md:px-10 py-3 sm:py-4
                     bg-green-600 text-white
                     font-semibold rounded-full
                     border-2 border-green-800
                     shadow-lg shadow-green-600/30
                     hover:bg-green-700 hover:scale-105
                     transition-all duration-700 ease-out
                     ${step >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Request Service
        </button>
      </div>

      <WaterFooter />
    </section>
  );
}
