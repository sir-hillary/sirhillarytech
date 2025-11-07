import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

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
    { name: "Home", to: "/", type: "route" },
    { name: "About", to: "about", type: "section" },
    { name: "Portfolio", to: "portfolio", type: "section" },
    { name: "Services", to: "services", type: "section" },
    { name: "Contact", to: "contact", type: "section" },
  ];

  const handleNavClick = (item) => {
    if (item.type === "route") {
      navigate(item.to);
    }
    setIsOpen(false);
  };

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
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative">
                {item.type === "route" ? (
                  <Link
                    to={item.to}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${
                      location.pathname === item.to
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 ${
                        location.pathname === item.to ? "w-3/4" : "w-0 group-hover:w-3/4"
                      }`}
                    ></span>
                  </Link>
                ) : (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={800}
                    offset={-80}
                    className="px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white transition-all duration-300 relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 w-0 group-hover:w-3/4 transition-all duration-300"></span>
                  </ScrollLink>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            

            {/* Connect Button */}
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              offset={-80}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2 cursor-pointer"
            >
              Connect with me
              <ExternalLink className="w-4 h-4" />
            </ScrollLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-3">
           

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 transform ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-80 h-full bg-gray-900/95 backdrop-blur-xl shadow-2xl border-l border-gray-800">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-800">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 h-auto"
                  onClick={handleLogoClick}
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-300" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 p-6 space-y-4">
                {navItems.map((item, idx) => (
                  <div key={idx} className="group">
                    {item.type === "route" ? (
                      <Link
                        to={item.to}
                        onClick={() => handleNavClick(item)}
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 border-l-4 ${
                          location.pathname === item.to
                            ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white border-purple-400"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/50 border-transparent hover:border-purple-400/50"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        duration={800}
                        offset={-80}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 rounded-xl font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 border-l-4 border-transparent hover:border-cyan-400/50 cursor-pointer"
                      >
                        {item.name}
                      </ScrollLink>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Footer */}
              <div className="p-6 border-t border-gray-800">
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  Connect with me
                  <ExternalLink className="w-4 h-4" />
                </ScrollLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;