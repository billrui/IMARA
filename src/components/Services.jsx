import { useState } from "react";

const serviceData = [
  { title: "Soil Analysis", icon: "fas fa-seedling", content: "Soil chemical analysis to determine pH and nutrient content for optimized crop production and sustainable land management." },
  { title: "Water Analysis", icon: "fas fa-tint", content: "Physical, chemical and biological analysis of raw, potable and effluent water for safety and regulatory compliance." },
  { title: "Fertilizer Analysis", icon: "fas fa-flask", content: "Fertilizer quality and nutrient composition analysis to support crop development." },
  { title: "Plant Tissue Analysis", icon: "fas fa-leaf", content: "Determine nutritional content in plant tissues to diagnose deficiencies and monitor crop nutrient status." },
  { title: "Food Analysis", icon: "fas fa-utensils", content: "Physical and chemical analysis of food for human consumption to determine quality and safety." },
  { title: "Animal Feeds Analysis", icon: "fas fa-drumstick-bite", content: "Analysis of animal feeds to determine quality, composition and safety." },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="services" className="py-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-10">Our Laboratory Services</h1>

      <div className="space-y-4">
        {serviceData.map((service, index) => (
          <div key={index} className="border rounded shadow-md">
            <div
              className="flex items-center justify-between p-4 cursor-pointer bg-gray-100"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center gap-2">
                <i className={`${service.icon}`}></i>
                <span className="font-semibold">{service.title}</span>
              </div>
              <span>{openIndex === index ? "-" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-white">{service.content}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
