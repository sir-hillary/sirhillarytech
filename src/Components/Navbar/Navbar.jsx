import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, ExternalLink } from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/", type: "route" },
    { name: "About Us", path: "/about", type: "route" },
    { name: "Projects", path: "/portfolio", type: "route" },
    { name: "Our Services", path: "/services", type: "route" },
    {
      name: "Softwares solutions",
      type: "dropdown",
      children: [
        { name: "Biometrics", to: "https://biometric.kemrut.com" },
        { name: "Microfinance", to: "https://kss.kemrut.com/" },
      ],
    },
  ];

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-xl shadow-2xl shadow-primary/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/*---------------------- Logo---------------------- */}
          <div className="flex-shrink-0">
            <div
              onClick={handleLogoClick}
              className="flex items-center cursor-pointer group"
            >
              <img
                src={logo}
                alt="Logo"
                className="w-36 sm:w-45 h-auto transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* -------------------------Desktop Navigation--------------- */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="group relative">
                {item.type === "dropdown" ? (
                  <div className="relative">
                    <div className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white transition-all duration-300 flex items-center gap-1">
                      {item.name}
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary w-0 group-hover:w-3/4 transition-all duration-300"></span>
                    </div>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-1 w-48 bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50 border border-gray-700">
                      <div className="py-1">
                        {item.children?.map((child, childIdx) => (
                          <a
                            key={childIdx}
                            href={child.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white transition-all duration-300 relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary w-0 group-hover:w-3/4 transition-all duration-300"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="px-6 py-3 bg-primary text-text-gray font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2 cursor-pointer"
            >
              Connect With Us
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* ---------------Mobile Navigation------------- */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 transform ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          {/*----------------------- Backdrop ----------------------*/}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/*------------------- Menu Panel -------------------*/}
          <div className="absolute top-0 right-0 w-80 h-full bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-gray-800">
            <div className="flex flex-col h-full">
              {/*------------------- Panel Header-------------------- */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 h-auto cursor-pointer"
                  onClick={handleLogoClick}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-300" />
                </button>
              </div>

              {/*-------------------- Navigation Items--------------------------- */}
              <div className="flex-1 p-6 space-y-4">
                {navItems.map((item, idx) => {
                  if (item.type === "dropdown") {
                    return (
                      <div key={idx} className="space-y-2">
                        <div className="px-4 py-3 rounded-xl font-medium text-gray-500 uppercase text-sm">
                          {item.name}
                        </div>
                        {item.children?.map((child, childIdx) => (
                          <a
                            key={childIdx}
                            href={child.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="block px-6 py-3 rounded-xl font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 border-l-4 border-transparent hover:border-cyan-400/50"
                          >
                            {child.name}
                          </a>
                        ))}
                      </div>
                    );
                  }

                  // For regular section links
                  return (
                    <Link
                      key={idx}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-xl font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 border-l-4 border-transparent hover:border-cyan-400/50 cursor-pointer"
                    >
                      {" "}
                      {item.name}{" "}
                    </Link>
                  );
                })}
              </div>

              {/*---------------------------------- Mobile Footer------------------------- */}
              <div className="p-6 border-t border-gray-800">
                <Link
                  to="/contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-4 bg-primary text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  Connect With Us
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
