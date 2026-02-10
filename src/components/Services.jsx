import { useState } from "react";
import { send } from "@emailjs/browser";
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
  const [modalService, setModalService] = useState(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    request_details: "",
  });
  const [sending, setSending] = useState(false);

  // Toggle service description
  const handleToggle = (index) => setOpenIndex(openIndex === index ? null : index);

  // Open modal form for a service
  const handleRequest = (service) => setModalService(service);

  // Close modal
  const closeModal = () => {
    setModalService(null);
    setFormData({ user_name: "", user_email: "", request_details: "" });
  };

  // Handle input change
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!modalService) return;

    setSending(true);

    try {
      await send(
        "service_rapdvl1",       // EmailJS service ID
        "template_u5kurba",      // EmailJS template ID
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          service_name: modalService.title, // include selected service
          request_details: formData.request_details,
        },
        "NwiBom_kjZvpQfXpR"      // public key
      );

      alert(`Your request for ${modalService.title} has been sent!`);
      closeModal();
    } catch (error) {
      console.error(error);
      alert("Failed to send request. Please try again later.");
    }

    setSending(false);
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
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl font-bold text-center text-green-200 mb-4">
          Our Laboratory Services
        </h2>
        <p className="text-center text-white/90 mb-12 max-w-2xl mx-auto">
          Click a service to request it.
        </p>

        {/* Service grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceData.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100
                           hover:shadow-2xl hover:border-green-200 transition-all duration-300 overflow-hidden"
              >
                {/* Service header */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-green-50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-700 text-xl">
                      <i className={service.icon}></i>
                    </div>
                    <span className="text-lg font-semibold text-gray-800">{service.title}</span>
                  </div>
                  <span
                    className={`text-2xl font-bold text-green-700 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Collapsible content */}
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-700 leading-relaxed mb-4">{service.content}</p>
                  <button
                    onClick={() => handleRequest(service)}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Request {service.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Form */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-6 text-green-700 text-center">
              Request {modalService.title}
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
                value={formData.user_name}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                value={formData.user_email}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              <textarea
                name="request_details"
                placeholder="Request details"
                rows="4"
                required
                value={formData.request_details}
                onChange={handleChange}
                className="w-full border p-3 rounded-lg"
              />
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
              >
                {sending ? "Sending..." : "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
