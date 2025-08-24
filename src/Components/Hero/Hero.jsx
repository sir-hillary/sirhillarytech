/* eslint-disable no-unused-vars */
import React from "react";
import profile_img from "../../assets/profile_img.png";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32"
      // ↑ pt-32 adds spacing so image sits below navbar
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-black"></div>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-60 animate-pulse"></div>

      {/* Profile Image */}
      <motion.img
        src={profile_img}
        alt="Profile"
        className="w-44 h-44 rounded-full border-4 border-purple-500/40 shadow-xl hover:scale-105 transition-transform bg-black/40 backdrop-blur-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Heading */}
      <motion.h1
        className="mt-8 text-3xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm Omondi Hillary
        <br /> MERN Fullstack Developer & Creative Designer
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mt-4 max-w-2xl text-gray-300 text-lg sm:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I build sleek, responsive, and scalable digital experiences that stand
        out.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium shadow-lg hover:scale-105 transition-transform"
        >
          Connect with me <ArrowRight size={18} />
        </a>
        <a
          href="/resume.pdf"
          download="sir_hillary_resume.pdf"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white transition"
        >
          My Resume <Download size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
