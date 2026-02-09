import { useState, useEffect } from "react";
import Logo from "../assets/IMARA.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleHomeClick = () => {
    window.dispatchEvent(new Event("heroFade"));
    setOpen(false);
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
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-white/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <img
            src={Logo}
            alt="Imara Logo"
            className="h-10 md:h-12 rounded-xl hover:scale-105 transition-transform duration-300"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10 font-medium text-blue-900">
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.onClick}
                className="relative group"
              >
                <span className="group-hover:text-green-600 transition-colors">
                  {link.label}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-10 h-10 rounded-xl
                       bg-white/90 backdrop-blur
                       border border-white/60
                       shadow-lg shadow-black/20
                       z-50 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-6 h-0.5 bg-blue-900 transition-all duration-300
                ${open ? "rotate-45" : "-translate-y-2"}`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-blue-900 transition-all duration-300
                ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute w-6 h-0.5 bg-blue-900 transition-all duration-300
                ${open ? "-rotate-45" : "translate-y-2"}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40
          bg-gradient-to-b from-blue-50/95 to-white/95
          backdrop-blur-xl
          flex flex-col items-center justify-center
          transition-all duration-500
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {menuLinks.map((link, index) => (
          <a
            key={link.href}
            href={link.href}
            onClick={link.onClick}
            className={`text-2xl font-semibold text-blue-900
              transition-all duration-500
              hover:text-green-600 hover:scale-105
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
