/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import profile_img from "../../assets/sirhillary.png";
import { useNavigate } from "react-router-dom";
import { socialLinks } from "../../assets/assets";

const Hero = () => {

  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

 

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 
        bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-20 md:pt-24 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-6 lg:space-y-8"
        >
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">
              Available for new projects
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Hillary
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-light"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <span className="text-gray-500 mx-2">•</span>
              <span className="bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
                UI/UX Designer
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            I create{" "}
            <span className="text-primary font-medium">
              sleek, modern, and responsive
            </span>
            {" "}
            web & mobile experiences, blending clean design with powerful
            technologies like React, Node.js, React Native and the MERN stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.button
              onClick={() => scrollToSection("portfolio")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold 
                shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2"
            >
              View My Work
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                text-gray-200 font-semibold shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 
                flex items-center justify-center gap-2"
            >
              Get In Touch
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center lg:justify-start gap-4 pt-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 
                  hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon
                  size={20}
                  className="text-gray-400 group-hover:text-primary transition-colors duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end relative"
        >
          <div className="relative">
           
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl transform scale-110"></div>

          
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-full p-2 bg-gradient-to-r from-purple-500 to-cyan-500 
                shadow-2xl shadow-primary/25"
            >
              <img
                src={profile_img}
                alt="Hillary Omondi - Full Stack Developer"
                className="w-48 sm:w-56 md:w-64 lg:w-80 rounded-full object-cover border-4 border-gray-900 
                  shadow-2xl"
              />
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 -right-4 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full 
                border border-gray-700/50 shadow-lg"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                MERN Stack
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-full 
                border border-gray-700/50 shadow-lg"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                React.js
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-300 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
