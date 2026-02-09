import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactBg from "../assets/con.jpg";

export default function Contact() {
  const formRef = useRef(null);
  const formAnimRef = useRef(null);
  const infoRef = useRef(null);

  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [sending, setSending] = useState(false);

  /* EMAILJS INIT */
  useEffect(() => {
    emailjs.init("NwiBom_kjZvpQfXpR");
  }, []);

  /* Scroll animation */
  useEffect(() => {
    const options = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.dataset.type === "form"
            ? setFormVisible(true)
            : setInfoVisible(true);
        }
      });
    }, options);

    if (formAnimRef.current) observer.observe(formAnimRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, []);

  /* EMAIL SUBMIT */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        "service_rapdvl1",
        "template_u5kurba",
        formRef.current,
        
      );

      alert("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }

    setSending(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center justify-center">

        {/* CONTACT FORM */}
        <div
          ref={formAnimRef}
          data-type="form"
          className={`flex-1 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-all duration-700
          ${formVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Contact Us
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="border rounded-lg px-4 py-3"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="border rounded-lg px-4 py-3"
            />

            <button
              type="submit"
              disabled={sending}
              className={`bg-blue-900 text-white px-6 py-3 rounded-full font-semibold transition
              ${sending ? "opacity-60" : "hover:bg-blue-800"}`}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* CONTACT INFO */}
        <div
          ref={infoRef}
          data-type="info"
          className={`flex-1 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg transition-all duration-700
          ${infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            Get in Touch
          </h3>

          <p><strong>Company:</strong> Imara Analytical Laboratories</p>
          <p><strong>P.O Box:</strong> 1555-20200 Kericho</p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:imaralaboratory@gmail.com"
              className="text-blue-900 underline"
            >
              imaralaboratory@gmail.com
            </a>
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            <span className="font-bold">(+254 703 333 423)</span> |{" "}
            <span className="font-bold">(+254 736 351 633)</span>
          </p>
        </div>

      </div>
    </section>
  );
}
