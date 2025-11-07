/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode, 
  FaServer, 
  FaPalette, 
  FaMobileAlt, 
  FaLaptopCode,
  FaFileDownload,
  FaEnvelope,
  FaArrowRight
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaCode className="w-8 h-8 text-primary" />,
      title: "Fullstack Development",
      desc: "Building sleek, scalable, and responsive web applications with the MERN stack and modern frameworks.",
      features: ["MERN Stack", "REST APIs", "Real-time Apps"]
    },
    {
      icon: <FaServer className="w-8 h-8 text-primary" />,
      title: "Backend Engineering",
      desc: "Designing secure, fast, and reliable APIs with Node.js, Express, and cloud database solutions.",
      features: ["Node.js", "MongoDB", "API Design"]
    },
    {
      icon: <FaPalette className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      desc: "Crafting beautiful, user-centric designs with Figma, Adobe Suite, and modern design principles.",
      features: ["Figma", "User Research", "Prototyping"]
    },
    {
      icon: <FaLaptopCode className="w-8 h-8 text-primary" />,
      title: "Frontend Development",
      desc: "Creating pixel-perfect, responsive interfaces with React, Tailwind CSS, and modern JavaScript.",
      features: ["React.js", "Tailwind", "Responsive"]
    },
    {
      icon: <FaMobileAlt className="w-8 h-8 text-primary" />,
      title: "Mobile App Development",
      desc: "Building cross-platform mobile applications with React Native for iOS and Android platforms.",
      features: ["React Native", "iOS & Android", "Cross-platform"]
    }
  ];

  const handleViewProjects = () => {
    navigate("/portfolio");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 py-12  px-4 sm:px-6 lg:px-8 overflow-hidden" id="services">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">What I Offer</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I combine <span className="text-primary">creativity</span> and <span className="text-primary">technical expertise</span> to deliver 
            impactful digital solutions that bring ideas to life and drive business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 lg:p-8 
                        hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 
                            rounded-2xl border border-gray-700/50 group-hover:border-primary/30 mb-6 transition-all duration-300">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm lg:text-base mb-4 leading-relaxed">
                {service.desc}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/50 
                             group-hover:border-primary/20 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={handleViewProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 
                        text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 
                        transition-all duration-300 flex items-center gap-3"
            >
              View My Projects
              <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="/resume.pdf"
              download="Hillary_Omondi_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/30 
                        text-gray-200 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                        flex items-center gap-3"
            >
              <FaFileDownload className="w-4 h-4 text-primary" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-primary/30 
                        text-gray-200 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 
                        flex items-center gap-3"
            >
              <FaEnvelope className="w-4 h-4 text-primary" />
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;