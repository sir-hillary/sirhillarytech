/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Database, Zap, Download } from "lucide-react";
import { IoLogoHtml5 } from "react-icons/io5";
import about_img from "../../assets/about_img.png";
import { useNavigate } from "react-router-dom";
import { SiCanva, SiExpress, SiGithub, SiJavascript, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";
import { RiNodejsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";

const About = () => {


  const navigate = useNavigate()

  const skills = [
    { name: "HTML5 & CSS3", category: "frontend", icon: IoLogoHtml5 },
    { name: "JavaScript (ES6+)", category: "frontend", icon: SiJavascript },
    { name: "React.js", category: "frontend", icon: FaReact },
    { name: "Node.js & Express.js", category: "backend", icon: RiNodejsFill },
    { name: "MongoDB", category: "backend", icon: FaNodeJs },
    { name: "Tailwind CSS", category: "frontend", icon: SiTailwindcss },
    { name: "Figma", category: "design", icon: FiFigma },
    { name: "UI/UX Design", category: "design", icon: SiCanva },
    { name: "REST APIs", category: "backend", icon: SiExpress },
    { name: "Git & GitHub", category: "tools", icon: SiGithub },
    { name: "React Native", category: "mobile App development", icon: TbBrandReactNative },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-4 sm:px-6 lg:px-8 py-12 overflow-hidden"
    >
      {/* ----------------Background Elements----- */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left: Image with Enhanced Effects */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative group">
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden"
            >
              <img
                src={about_img}
                alt="Hillary Omondi - Full Stack Developer"
                className="w-72 sm:w-80 md:w-96 lg:w-[420px] rounded-2xl shadow-2xl border border-gray-700/50"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -top-4 -left-4 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                2+ Years Experience
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 px-4 py-2 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-lg"
            >
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                12+ Projects
              </span>
            </motion.div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl blur-2xl -z-10 transform scale-110 group-hover:scale-125 transition-all duration-500"></div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:gap-8"
        >
          {/* Section Header */}
          <div className="text-center lg:text-left space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300 font-medium">
                About Me
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Crafting Digital{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Excellence
              </span>
            </motion.h2>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Hi, I'm{" "}
              <span className="font-semibold text-white">Omondi Hillary</span>,
              a passionate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium">
                MERN Fullstack Developer
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-medium">
                Creative Designer
              </span>
              .
            </p>

            <p className="text-gray-400 leading-relaxed">
              I specialize in building{" "}
              <span className="text-primary font-medium">
                sleek, responsive, and scalable
              </span>{" "}
              digital experiences that merge cutting-edge functionality with
              modern design principles. My mission is to create tech solutions
              that make brands stand out in the digital landscape.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Explore my latest projects and innovative tech solutions in{" "}
              <button
                onClick={() => navigate('/portfolio')}
                className="text-primary hover:text-cyan-400 font-medium transition-colors duration-300 underline underline-offset-4"
              >
                My Portfolio
              </button>
              .
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-white">
              Tech Stack & Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group bg-gray-800/50 backdrop-blur-sm hover:bg-primary/20 border border-gray-700/50 
                    hover:border-primary/30 px-3 py-3 rounded-xl text-sm font-medium text-center transition-all 
                    duration-300 shadow-lg hover:shadow-primary/10 cursor-pointer flex items-center justify-center gap-2"
                >
                  <skill.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 
                text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 
                transition-all duration-300 flex items-center justify-center gap-2"
            >
              Let's Work Together
              <Zap className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/30 
                text-gray-200 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                flex items-center justify-center gap-2"
            >
              Download CV
              <Download className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
