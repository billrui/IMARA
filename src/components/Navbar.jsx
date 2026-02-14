import { useState, useEffect } from "react";
import Logo from "../assets/IMARA.jpg";

export default function Navbar({ goHomeSlide }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleHomeClick = () => {
    setOpen(false);

    const heroSection = document.getElementById("hero");
    const navbar = document.querySelector("header");

    if (heroSection && navbar) {
      window.scrollTo({
        top: heroSection.offsetTop - navbar.offsetHeight,
        behavior: "smooth",
      });
    }

    if (goHomeSlide) setTimeout(() => goHomeSlide(), 400);

    window.dispatchEvent(new Event("heroFade"));
  };

  const handleLinkClick = () => setOpen(false);

  const menuLinks = [
    { href: "#hero", label: "Home", onClick: handleHomeClick },
    { href: "#about", label: "About", onClick: handleLinkClick },
    { href: "#services", label: "Services", onClick: handleLinkClick },
    { href: "#contact", label: "Contact", onClick: handleLinkClick },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <img src={Logo} alt="Imara Logo" className="h-10 md:h-12 rounded-xl hover:scale-105 transition-transform duration-300" />

          <nav className="hidden md:flex items-center space-x-10 font-medium text-white">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={link.onClick} className="relative group">
                <span className="group-hover:text-green-400 transition-colors">{link.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 shadow-lg shadow-black/20 z-50 flex items-center justify-center"
          >
            <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
            <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center
          transition-all duration-500 ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {menuLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={link.onClick}
            className={`text-2xl font-semibold text-white transition-all duration-500 hover:text-green-400 hover:scale-105
              ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: `${index * 120}ms`, marginBottom: "2rem" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
