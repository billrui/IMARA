import { useEffect, useState } from "react";
import AboutBg from "../assets/About1.jpg"; // only for About section

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
      className="relative py-24 max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 overflow-hidden"
      style={{
        backgroundImage: `url(${AboutBg})`, // background only here
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
{/* Left Text */}
<div
  className={`flex-1 relative z-10 transform transition-all duration-1000 ${
    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
  }`}
>
  <h3 className="text-4xl font-bold mb-6 text-green-700">
    About Imara Analytical Laboratories
  </h3>

  <p className="mb-5 leading-relaxed text-lg font-bold text-black">
    Imara Analytical Laboratories (IAL) is a leading private testing laboratory headquartered in Kericho, Kenya, serving clients across East Africa. We specialize in providing comprehensive laboratory services for soil, water, effluent, fertilizers, plant tissue, human food, and animal feed.
  </p>

  <p className="mb-5 leading-relaxed text-lg font-bold text-black">
    IAL partners with a wide range of stakeholders, including agricultural producers, tea and coffee farmers, water management authorities, and agribusinesses, delivering timely and reliable laboratory solutions. Our laboratory leverages a combination of skilled expertise and advanced technology to ensure high-quality testing and actionable advisory services.
  </p>

  <p className="leading-relaxed text-lg font-bold text-black">
    Committed to excellence, IAL offers affordable, accurate, and rapid testing services while providing hands-on guidance to support informed decision-making. Whether through contract testing or customized analyses, Imara Analytical Laboratories is your trusted turnkey laboratory partner.
  </p>
</div>


      {/* Right Panel */}
<div
  className={`flex-1 relative z-10 bg-white/90 p-8 rounded-2xl shadow-xl transform transition-all duration-1000 ${
    visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
  }`}
>
  <h3 className="text-2xl font-semibold mb-3 text-green-700">Mission</h3>
  <p className="mb-5">
    Provide affordable laboratory testing services with commitment to customer satisfaction.
  </p>

  <h3 className="text-2xl font-semibold mb-3 text-green-700">Vision</h3>
  <p className="mb-5">
    Provide timely, innovative and quality laboratory services.
  </p>

  <h3 className="text-2xl font-semibold mb-3 text-green-700">Core Values</h3>
  <ul className="list-disc pl-5 space-y-2">
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

    </section>
  );
}
