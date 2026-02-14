import React, { useRef, forwardRef, useImperativeHandle, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "./Navbar";
import WaterFooter from "./WaterFooter";

// Images
import WelcomeImage from "../assets/welcome.jpg";
import SoilImage from "../assets/soil.jpg";
import PlantImage from "../assets/plant.jpg";
import FeedImage from "../assets/feed.jpg";
import FoodImage from "../assets/food.jpg";
import FertilizerImage from "../assets/fertilizer.jpg";
import CompostImage from "../assets/compost.jpg";
import WaterImage from "../assets/water.jpg";
import EffluentImage from "../assets/effluent.jpg";
import ResearchImage from "../assets/research.jpg";

const Hero = forwardRef((props, ref) => {
  const swiperRef = useRef(null);
  const [showServicePopup, setShowServicePopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [currentInfo, setCurrentInfo] = useState({ title: "", description: "", table: null });

  const whatsappNumber = "+254736351633"; // Replace with your number

  // Slides with description + optional table
  const slides = [
    {
      title: "Welcome to Imara Analytical Laboratories",
      rightText: "More Info About Us",
      description:
        "Imara Analytical Laboratories (IAL) is a leading private testing laboratory headquartered in Kericho, Kenya, serving clients across East Africa. We specialize in providing comprehensive laboratory services for soil, water, effluent, fertilizers, plant tissue, human food, and animal feed.",
      shortDescription: "Accurate. Certified. Trusted laboratory testing services for Agriculture, Environment & Industry.",
      image: WelcomeImage,
      isWelcome: true,
    },
    {
      title: "Soil Analysis",
      description:
        "Our soil test covers pH and Mineral contents (chemical analysis) of a sample. These are done to optimize crop production and environmental conservation as well as management. Soil analyses are done during environmental monitoring and diagnosis when challenges manifest. IAL has provided latest techniques and methodologies to foster fast, reliable and accurate soil chemical analysis. Based on the test results, we are able to offer sustainable advice to our clients.",
      table: [
        { name: "Total nitrogen", parameters: "N" },
        { name: "Soil pH", parameters: "pH" },
        { name: "Basic soil analysis", parameters: "pH, P, K, Ca, Mg, Na, OM, N, CEC" },
        { name: "Complete soil analysis", parameters: "pH, EC, P, K, Ca, Mg, S, Na, Fe, Mn, B, Cu, Zn, CEC, N, OM" },
      ],
      image: SoilImage,
    },
    {
      title: "Plant Tissue Analysis",
      description:
        "Plant tissues analysis is the determination of nutritional content of plant partition in order to ascertain its chemical composition for correction and monitoring of deficiency. IAL has provided latest technologies and methodologies to foster fast, reliable and accurate chemical plant tissue analysis. Based on test results, we are able to offer sustainable advices to our clients.",
      table: [
        { name: "Total nitrogen", parameters: "N" },
        { name: "Leaf analysis", parameters: "N, P, K, Ca, Mg, S, Na, Fe, Mn, B, MO, Zn" },
        { name: "Heavy metals in plant", parameters: "Ag, B, Cd, Cu, Pb, Zn, Cr, Ni" },
      ],
      image: PlantImage,
    },
    {
      title: "Animal Feed Analysis",
      description:
        "Animal feeds analysis at IAL entails physical, biological and chemical characteristics of various food products. Animal feeds are analyzed to determine their quality, composition, and safety. IAL has established a state-of-the-art testing facility for handling feed products in respect to physical and chemical analysis. Feed analyses are done for quality monitoring and safety aspects. Our test report can also assist clients in subsequent formulation needs of their products as well as animal feeding decisions.",
      table: [
        { name: "Mineral elements in feeds", parameters: "P, K, Ca, Mg, S, Fe, Mn, B, Cu, Mo, Zn" },
        { name: "Heavy metals analysis", parameters: "Cu, Cd, Pb, Co, B, Ni, Zn, Cr, As" },
        { name: "Mineral lick analysis", parameters: "Na, Cl, Cd, Ca, Mg, P, S, Mn, Fe, Zn, Cu, Mo, Co" },
      ],
      image: FeedImage,
    },
    {
      title: "Food Analysis",
      description:
        "Human food analysis at IAL entails physical, biological and chemical characteristics of various products. Food for human consumption is analyzed to determine its quality and safety. IAL has established a state-of-the-art testing facility for handling food products in respect to physical and chemical analysis. Food analyses are done for quality monitoring and safety aspects. Our test report can be used for onward decision making by stakeholders.",
      image: FoodImage,
    },
    {
      title: "Fertilizer Analysis",
      description:
        "Fertilizers are analyzed to determine the quality and chemical composition. Fertilizer nutrition content helps in plant development and improves overall yield of the crop. IAL uses instrumental methods of fertilizer analysis to obtain accurate, reliable, and credible fertilizer results for our clients. Based on the fertilizer test reports, we are able to provide technical recommendations on the application rates on various types of fertilizer used in crops such as tea, sugarcane, coffee, maize, beans, avocado, etc.",
      image: FertilizerImage,
    },
    {
      title: "Compost / Manure Analysis",
      description:
        "Organic matter evaluation supporting sustainable soil management. IAL provides comprehensive analysis for compost and manure to ensure quality and nutrient content for agricultural use.",
      image: CompostImage,
    },
    {
      title: "Water Analysis",
      description:
        "Our water tests cover physical, biological, and chemical tests for various types (raw, potable, and effluent) to determine their suitability for purpose. IAL has deployed modern methodologies and techniques for the analysis of water samples. Our clients can have an edge in terms of turnaround time, accuracy, and reliable results from our modern laboratory.",
      table: [
        { name: "Microbial", parameters: "Coliforms, E.coli, TVC, Salmonella" },
        { name: "Complete irrigation water", parameters: "pH, Na, Al, Ca, Mg, Cl, EC, TDS, S, Ni, P, K, B, SO4, Total nitrogen, NH4" },
        { name: "Heavy metals analysis", parameters: "As, Cd, B, Se, Cu, Zn, Pb, Cr, B, Ni, Mn, Fr" },
        { name: "NEMA drinking water", parameters: "pH, TSS, NO3, NH4, TDS, E.coli, Coliforms, Cd, Pb, Cu, Zn" },
      ],
      image: WaterImage,
    },
    {
      title: "NEMA Effluent Analysis",
      description:
        "Environmental discharge testing meeting regulatory compliance standards. IAL conducts effluent analyses for industries to ensure safe and compliant disposal of wastewater.",
      image: EffluentImage,
    },
    {
      title: "Research Analysis for University and Colleges",
      description:
        "Advanced analytical support for universities, colleges, and research institutions. IAL provides specialized tests for research purposes to ensure accuracy and reliability.",
      table: [
        { name: "Heavy Metals Analysis", parameters: "Se, Ni, Pb, Cd, Co, Cr, Zn" },
      ],
      image: ResearchImage,
    },
  ];

  const serviceTitles = slides.slice(1);

  useImperativeHandle(ref, () => ({
    resetSwiper: () => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideToLoop(0, 500);
      }
    },
  }));

  const handleServiceClick = (service) => {
    const message = encodeURIComponent(`Hello, I would like to request: ${service.title}`);
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g,'')}?text=${message}`;
    window.open(url, "_blank");
    setShowServicePopup(false);
  };

  const handleRequestPrice = () => {
    const message = encodeURIComponent("Hello, I would like the Price List.");
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g,'')}?text=${message}`, "_blank");
  };

  const handleRequestCallback = () => {
    const message = encodeURIComponent("Hello, I would like a call back.");
    window.open(`https://wa.me/${whatsappNumber.replace(/\D/g,'')}?text=${message}`, "_blank");
  };

  const handleReadMore = (slide) => {
    setCurrentInfo({ title: slide.title, description: slide.description, table: slide.table || null });
    setShowInfoPopup(true);
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <Navbar goHomeSlide={() => ref.current.resetSwiper()} />

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        speed={1200}
        navigation
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="h-screen w-full bg-cover bg-center flex items-center pb-24"
              style={{
                backgroundImage: `linear-gradient(to right, rgba(10,15,25,0.85) 0%, rgba(10,15,25,0.7) 40%, rgba(10,15,25,0.3) 70%, rgba(10,15,25,0.1) 100%), url(${slide.image})`,
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            >
              <div className={`relative z-10 px-8 sm:px-16 md:px-24 pt-24 mt-10 md:mt-16 text-white ${slide.isWelcome ? "flex flex-col md:flex-row items-center justify-between gap-8" : ""}`}>
                
                {slide.isWelcome ? (
                  <>
                    <div className="md:w-1/2 flex flex-col items-start">
                      <motion.h1
                        key={slide.title}
                        initial={{ opacity: 0, x: -60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-4"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        key={`${slide.title}-desc`}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2 }}
                        className="text-lg md:text-xl text-gray-300 mb-6"
                      >
                        {slide.shortDescription}
                      </motion.p>

                      <div className="flex gap-4 flex-wrap">
                        <button
                          onClick={() => setShowServicePopup(true)}
                          className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition shadow-md"
                        >
                          Request Service
                        </button>

                        <button
                          onClick={handleRequestPrice}
                          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-md"
                        >
                          Request Price List
                        </button>

                        <button
                          onClick={handleRequestCallback}
                          className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition shadow-md"
                        >
                          Request Call Back
                        </button>
                      </div>
                    </div>

                    <motion.div
                      className="md:w-1/2 flex flex-col items-center justify-center text-center text-gray-100 gap-4"
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.2 }}
                    >
                      <span className="text-2xl md:text-3xl font-medium">{slide.rightText}</span>
                      <button
                        onClick={() => handleReadMore(slide)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow"
                      >
                        Read More
                      </button>
                    </motion.div>
                  </>
                ) : (
                  <div className="max-w-2xl flex flex-col items-start gap-4">
                    <motion.h1
                      key={slide.title}
                      initial={{ opacity: 0, x: -60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1 }}
                      className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-2"
                    >
                      {slide.title}
                    </motion.h1>

                    <button
                      onClick={() => handleReadMore(slide)}
                      className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow"
                    >
                      Read More
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Glassy Service Popup */}
      <AnimatePresence>
        {showServicePopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl w-full max-w-md p-6 flex flex-col gap-4 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">Select a Service</h2>
              {serviceTitles.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => handleServiceClick(service)}
                  className="w-full py-3 rounded-xl bg-green-600 bg-opacity-80 text-white hover:bg-green-700 hover:bg-opacity-90 transition font-medium shadow"
                >
                  {service.title}
                </button>
              ))}
              <button
                onClick={() => setShowServicePopup(false)}
                className="mt-4 w-full py-3 rounded-xl bg-gray-300 bg-opacity-50 text-gray-800 hover:bg-gray-400 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glassy Info Popup */}
      <AnimatePresence>
        {showInfoPopup && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4 backdrop-blur-sm overflow-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl w-full max-w-2xl p-6 flex flex-col gap-4 shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 text-center">{currentInfo.title}</h2>

              <p className="text-white whitespace-pre-wrap">{currentInfo.description}</p>

              {currentInfo.table && (
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-white border border-gray-300 rounded-lg overflow-hidden">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="px-4 py-2 text-left">Analysis Name</th>
                        <th className="px-4 py-2 text-left">Parameters Included</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                      {currentInfo.table.map((row, idx) => (
                        <tr key={idx} className="hover:bg-gray-700/30">
                          <td className="px-4 py-2">{row.name}</td>
                          <td className="px-4 py-2">{row.parameters}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <button
                onClick={() => setShowInfoPopup(false)}
                className="mt-4 w-full py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition shadow"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaterFooter />
    </section>
  );
});

export default Hero;
