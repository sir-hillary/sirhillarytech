import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Portfolio", to: "portfolio" },
    { name: "Services", to: "services" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 px-6 md:px-16 lg:px-24 pt-5 flex items-center justify-between border-gray-800">
      {/* Logo */}
      <ScrollLink to="home" smooth={true} duration={600} offset={-80}>
        <img src={logo} alt="Logo" className="w-32 h-auto cursor-pointer" />
      </ScrollLink>

      {/* Nav Links */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium max-md:text-lg z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 md:px-8 py-6 max-md:h-screen md:rounded-full backdrop-blur-lg bg-black/90 md:bg-transparent md:border border-gray-700/40 overflow-hidden transition-[width] duration-300 ${
          isOpen ? "max-md:w-full" : "max-md:w-0"
        }`}
      >
        {/* Close Icon (mobile only) */}
        <X
          className="md:hidden absolute top-6 right-6 w-6 h-6 text-gray-300 cursor-pointer hover:text-white"
          onClick={() => setIsOpen(false)}
        />

        {navItems.map((item, idx) => (
          <ScrollLink
            key={idx}
            to={item.to}
            smooth={true}
            duration={600}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="relative text-gray-300 hover:text-white transition font-medium after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full after:mt-1 cursor-pointer"
          >
            {item.name}
          </ScrollLink>
        ))}

        {/* contact link mobile */}
        <ScrollLink
          to="contact"
          smooth={true}
          duration={600}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="px-6 py-2 mt-6 md:hidden bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-transform rounded-full text-white font-medium shadow-lg cursor-pointer"
        >
          Connect with me
        </ScrollLink>
      </div>

      {/* large screen Connect Button */}
      <ScrollLink
        to="contact"
        smooth={true}
        duration={600}
        offset={-80}
        className="hidden md:flex px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-105 transition-transform rounded-full font-medium text-white shadow-lg cursor-pointer"
      >
        Connect with me
      </ScrollLink>

      {/* Menu humburger icons */}
      <Menu
        className="md:hidden w-8 h-8 text-gray-300 cursor-pointer hover:text-white"
        onClick={() => setIsOpen(true)}
      />
    </nav>
  );
};

export default Navbar;
