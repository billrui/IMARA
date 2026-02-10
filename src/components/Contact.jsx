import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactBg from "../assets/con.jpg";
import WaterFooter from "./WaterFooter";

export default function Contact() {
  const formRef = useRef(null);
  const formAnimRef = useRef(null);
  const infoRef = useRef(null);

  const [formVisible, setFormVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);
  const [sending, setSending] = useState(false);

  /* EMAILJS INIT */
  useEffect(() => {
    emailjs.init("NwiBom_kjZvpQfXpR"); // your public key
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
        "service_rapdvl1",      // your service ID
        "template_u5kurba",     // your template ID
        formRef.current,
        "NwiBom_kjZvpQfXpR"     // your public key
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
      className="relative min-h-screen flex flex-col py-24 overflow-hidden"
      style={{
        backgroundImage: `url(${ContactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-start">

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
              name="user_name"
              placeholder="Full Name"
              required
              className="border rounded-lg px-4 py-3"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="border rounded-lg px-4 py-3"
            />

            <textarea
              name="request_details"
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

        {/* CONTACT INFO + MAP */}
        <div
          ref={infoRef}
          data-type="info"
          className={`flex-1 flex flex-col gap-6 transition-all duration-700
          ${infoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* CONTACT INFO */}
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg">
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

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d249.35888895894476!2d35.245964673611866!3d-0.35387145227605094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182a59ad2311dffd%3A0xd4b6e684c5d25678!2sIMARA%20ANALYTICAL%20LABORATORY!5e0!3m2!1sen!2ske!4v1770727357718!5m2!1sen!2ske" 
              width="100%"
              height="190"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Imara Laboratories Map"
            ></iframe>
          </div>
        </div>

      </div>

      {/* WATER FOOTER + COPYRIGHT */}
      <div className="relative mt-12">
        <WaterFooter />
        <div className="relative z-10 text-center text-sm text-blue-500 pt-6">
          &copy; {new Date().getFullYear()} Imara Analytical Laboratories. All rights reserved.
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="ml-4 px-3 py-1 bg-green-600 hover:bg-green-700 rounded-full text-white text-xs transition"
          >
            Back to Top
          </button>
        </div>
      </div>

    </section>
  );
}
