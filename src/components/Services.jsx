import { useState } from "react";
import ServicesBg from "../assets/soil.jpg"; // make sure this exists

const serviceData = [
  {
    title: "Soil Analysis",
    icon: "fas fa-seedling",
    content:
      "Soil chemical analysis to determine pH and nutrient content for optimized crop production and sustainable land management.",
  },
  {
    title: "Water Analysis",
    icon: "fas fa-tint",
    content:
      "Physical, chemical and biological analysis of raw, potable and effluent water for safety and regulatory compliance.",
  },
  {
    title: "Fertilizer Analysis",
    icon: "fas fa-flask",
    content:
      "Fertilizer quality and nutrient composition analysis to support crop development.",
  },
  {
    title: "Plant Tissue Analysis",
    icon: "fas fa-leaf",
    content:
      "Determine nutritional content in plant tissues to diagnose deficiencies and monitor crop nutrient status.",
  },
  {
    title: "Food Analysis",
    icon: "fas fa-utensils",
    content:
      "Physical and chemical analysis of food for human consumption to determine quality and safety.",
  },
  {
    title: "Animal Feeds Analysis",
    icon: "fas fa-drumstick-bite",
    content:
      "Analysis of animal feeds to determine quality, composition and safety.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle one-open-at-a-time behavior
  const handleToggle = (index) => {
    // If the clicked card is already open, close it; otherwise, open it and close any other
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="relative min-h-screen flex flex-col justify-center py-24"
      style={{
        backgroundImage: `url(${ServicesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-green-200 mb-4">
          Our Laboratory Services
        </h2>
        <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
          We offer a wide range of accredited laboratory testing services designed
          to support agriculture, food safety, environmental monitoring, and
          regulatory compliance.
        </p>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100
                           hover:shadow-2xl hover:border-green-200 transition-all duration-300 overflow-hidden"
              >
                {/* Header */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left
                             hover:bg-green-50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center
                                    rounded-full bg-green-100 text-green-700 text-xl">
                      <i className={service.icon}></i>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">
                      {service.title}
                    </span>
                  </div>

                  <span
                    className={`text-2xl font-bold text-green-700 transition-transform duration-300
                      ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
                >
                  <p className="text-gray-700 leading-relaxed">{service.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
