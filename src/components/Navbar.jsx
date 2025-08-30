import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linksLeft = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
  ];

  const linksRight = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full py-4 px-6 flex justify-between items-center z-50 text-white bg-transparent backdrop-blur-md">
      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center justify-center w-full">
        {/* Left Links */}
        <ul className="flex space-x-6">
          {linksLeft.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Center Name */}
        <h1 className="text-xl md:text-2xl font-extrabold px-6 tracking-wide">
          Zaigham <span className="text-indigo-400">Nasir</span>
        </h1>

        {/* Right Links */}
        <ul className="flex space-x-6">
          {linksRight.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-indigo-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden justify-between items-center w-full">
        {/* Always show name in mobile */}
        <h1 className="text-lg font-extrabold tracking-wide">
          Zaigham <span className="text-indigo-400">Nasir</span>
        </h1>

        {/* Menu Button */}
        <button
          className="text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md p-6 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            {[...linksLeft, ...linksRight].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)} // close on click
                  className="hover:text-indigo-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
