import { useState } from "react";
import Logo from "../assets/IMARA.jpg";


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow sticky top-0 z-50">
      <div className="logo">
        <img src={Logo}  alt="IAL Logo" className="h-12" />
      </div>

      <nav className={`md:flex md:items-center ${open ? "block" : "hidden"}`}>
        <ul className="md:flex md:space-x-6">
          <li><a href="#hero" className="hover:text-blue-600">Home</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>

      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </div>
    </header>
  );
}
