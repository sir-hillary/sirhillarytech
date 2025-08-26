/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import profile_img from "../../assets/profile_img.png";

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-12 md:px-20 lg:px-32 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Hillary</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            A passionate web developer creating sleek, modern, and responsive websites with React, Tailwind CSS, and MERN stack.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium shadow-md hover:shadow-lg transition"
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-2xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium shadow-md hover:shadow-lg transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src={profile_img}
            alt="Profile"
            className="w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 rounded-full shadow-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
