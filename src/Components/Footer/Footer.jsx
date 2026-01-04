import logo from "../../assets/logo.png";
import { socialLinks, contactInfo, services } from "../../assets/assets";
import {Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickRoutes = [
    { name: "About Us", path: "/about"},
    { name: "Services", path: "/services"},
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact"},
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/*---------------- Main Footer Content ----------------------*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* logo and brand section */}
          <div className="lg:col-span-4">
            <div className="flex flex-col space-y-6">
              <img
                src={logo}
                alt="CodeCraft logo"
                className="w-40 h-auto cursor-pointer opacity-90 hover:opacity-100 transition-all duration-300 mb-2"
              />

              <p className="text-gray-400 text-sm lg:text-base leading-relaxed">
                We transform digital visions into scalable, high-performance
                solutions. From enterprise applications to innovative startups,
                we craft exceptional experiences that drive growth and deliver
                measurable results.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <span className="text-xs font-medium text-gray-300">
                    Security First Approach
                  </span>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
                  <span className="text-xs font-medium text-gray-300">
                    24/7 Support
                  </span>
                </div>
              </div>

              {/*---------------------- Social Links ---------------------*/}
              <div className="flex space-x-3 pt-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 hover:bg-primary/20 rounded-xl transition-all duration-300 
                      hover:scale-105 hover:shadow-lg hover:shadow-primary/25 border border-gray-700/50"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={18}
                      className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/*--------------- Quick Links --------------------------------*/}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide relative inline-block">
              Company
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickRoutes.map((route, index) => (
                <li key={index}>
                  <Link
                    to={route.path}
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-2 cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="hover:translate-x-1 transition-transform duration-300 text-sm">
                      {route.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* -------------------Services-------------------- */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary  rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="hover:translate-x-1 transition-transform duration-300 text-sm">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary  rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="group flex items-start space-x-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <div
                      className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-primary-dull transition-all duration-300 
                      border border-gray-700/50 flex-shrink-0"
                    >
                      <contact.icon
                        size={16}
                        className="text-primary group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-xs text-gray-500 tracking-wide">
                © {currentYear}{" "}
                <span className="font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CodeCraft solutions
                </span>
                . All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        {/*------------------------- Tech Stack Mention--------------------------------- */}
        <div className="mt-6 pt-4 border-t border-gray-800/30 text-center">
          <p className="text-xs text-gray-600">
            Built with modern technologies including React, Node.js,
            tailwindcss, and docker.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
