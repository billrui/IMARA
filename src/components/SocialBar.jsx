import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function SocialBar() {
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    // Trigger animation after 0.5s delay when page loads
    const timer = setTimeout(() => setShowIcons(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const icons = [
    { icon: <FaFacebookF />, href: "https://facebook.com", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
    { icon: <FaInstagram />, href: "https://instagram.com", bg: "bg-pink-500", hover: "hover:bg-pink-600" },
    { icon: <FaWhatsapp />, href: " https://wa.me/254736351633", bg: "bg-green-500", hover: "hover:bg-green-600" },
  ];

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-start w-12 pl-2 h-12 rounded-r-full text-white shadow-lg
                      transform transition-all duration-500 ease-out
                      ${item.bg} ${item.hover} hover:scale-110
                      ${showIcons ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"}`}
          style={{ transitionDelay: `${index * 200}ms` }} // staggered delay
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
