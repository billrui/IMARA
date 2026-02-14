import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-24 px-6 flex flex-col md:flex-row gap-12 items-stretch overflow-hidden"
      style={{
        background: "rgba(0, 0, 0, 0.25)", // black glass effect
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)", // floating shadow
      }}
    >
      {/* Floating Decorative Shapes */}
      <div className="absolute -top-12 -left-12 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-green-300 rounded-lg opacity-15 animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-1/3 w-20 h-20 bg-green-100 rounded-full opacity-25 animate-pulse-slow"></div>

      {/* Left Panel */}
      <div
        className={`flex-1 relative z-10 bg-white p-10 rounded-3xl shadow-2xl transform transition-all duration-1000 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <h3 className="text-4xl font-bold mb-6 text-green-700">
          About Imara Analytical Laboratories
        </h3>

        <p className="mb-5 leading-relaxed text-lg font-medium text-gray-900">
          Imara Analytical Laboratories (IAL) is a leading private testing laboratory headquartered in Kericho, Kenya, serving clients across East Africa. We specialize in providing comprehensive laboratory services for soil, water, effluent, fertilizers, plant tissue, human food, and animal feed.
        </p>

        <p className="mb-5 leading-relaxed text-lg font-medium text-gray-900">
          IAL partners with a wide range of stakeholders, including agricultural producers, tea and coffee farmers, water management authorities, and agribusinesses, delivering timely and reliable laboratory solutions. Our laboratory leverages a combination of skilled expertise and advanced technology to ensure high-quality testing and actionable advisory services.
        </p>

        <p className="leading-relaxed text-lg font-medium text-gray-900">
          Committed to excellence, IAL offers affordable, accurate, and rapid testing services while providing hands-on guidance to support informed decision-making. Whether through contract testing or customized analyses, Imara Analytical Laboratories is your trusted turnkey laboratory partner.
        </p>
      </div>

      {/* Right Panel */}
      <div
        className={`flex-1 relative z-10 bg-white p-10 rounded-3xl shadow-2xl transform transition-all duration-1000 hover:scale-105 hover:shadow-3xl ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-3 text-green-700">Mission</h3>
        <p className="mb-5 text-gray-900">
          Provide affordable laboratory testing services with commitment to customer satisfaction.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-green-700">Vision</h3>
        <p className="mb-5 text-gray-900">
          Provide timely, innovative, and quality laboratory services.
        </p>

        <h3 className="text-2xl font-semibold mb-3 text-green-700">Core Values</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-900">
          <li>
            <strong className="text-green-700">Integrity:</strong> We build trust through transparency, ethical practices, and accountability.
          </li>
          <li>
            <strong className="text-green-700">Innovation:</strong> We embrace advanced techniques and ISO/IEC 17025:2017 standards to deliver precise, reliable results.
          </li>
          <li>
            <strong className="text-green-700">Excellence:</strong> We pursue the highest standards in testing and advisory services.
          </li>
          <li>
            <strong className="text-green-700">Reliability:</strong> Our clients can depend on us for timely, consistent, and accurate results.
          </li>
          <li>
            <strong className="text-green-700">Customer Focus:</strong> We tailor solutions to empower informed, confident decisions.
          </li>
        </ul>
      </div>

      {/* Extra CSS for slow pulsing animation */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-5px) scale(1.05); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
