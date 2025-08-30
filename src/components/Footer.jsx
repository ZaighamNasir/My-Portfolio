import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-10 text-center">
      {/* Name / Branding */}
      <h2 className="text-2xl font-bold text-white">
        Zaigham Nasir
      </h2>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mt-6 text-xl">
        <a href="https://www.linkedin.com/in/zaigham-nasir-6a7462279/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaLinkedin />
        </a>
        <a href="https://github.com/ZaighamNasir" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaGithub />
        </a>
        <a href="https://wa.me/923374935946" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/zaigham.nasir?igsh=MWFveDMwbG1yYmVqdw==" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/share/1D2MFmiY5E/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaFacebook />
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} All rights reserved | Made with{" "}
        <span className="text-red-500">❤️</span> by
      </p>
      <p className="text-sm text-white mt-1">Zaigham Nasir</p>
    </footer>
  );
}
