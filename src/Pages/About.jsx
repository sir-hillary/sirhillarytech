/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Zap,
  Users,
  Sparkles,
  Target,
  Rocket
} from "lucide-react";
import { skills, values, stats } from "../assets/assets";

const AboutPage = () => {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto relative z-10">
        {/*--------------------- Header ---------------------*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">
              Who We Are
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Building Digital<span className="text-primary"> Excellence</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We transform complex challenges into elegant digital solutions. 
            As a team of passionate developers, we craft software that drives business growth.
          </p>
        </motion.div>

        {/*---------------------- Main Content --------------------------*/}
        <div className="space-y-16 lg:space-y-20">
          {/* ------------------Mission & Vision--------------------- */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To deliver exceptional software solutions that empower businesses to thrive 
                in the digital age. We combine technical expertise with creative problem-solving 
                to build scalable, high-performance applications that make a real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                  <Rocket className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-semibold">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the go-to partner for innovative tech solutions, recognized for 
                our commitment to quality, innovation, and client success. We envision 
                a future where technology seamlessly enhances every aspect of business operations.
              </p>
            </motion.div>
          </div>

          {/*-------------------- Stats --------------------------*/}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 lg:p-6 text-center"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/*--------------------------- Skills Grid----------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">Our Technology Stack</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We leverage modern technologies to build robust, scalable, and high-performance applications.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group bg-gray-800/30 backdrop-blur-sm hover:bg-primary/10 border border-gray-700/50 
                    hover:border-primary/30 p-4 rounded-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">{skill.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/*--------------------- Values -----------------*/}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-3">Our Core Values</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These principles guide everything we do, from initial concept to final deployment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 lg:p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ----------------------------Team Philosophy ----------------------*/}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 lg:p-8"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                  Meet <span className="text-primary">Our Team</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We are a dedicated team of software engineers, designers, and problem-solvers 
                  who are passionate about creating exceptional digital experiences. Our collaborative 
                  approach ensures that every project benefits from diverse perspectives and expertise.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With experience spanning startups to enterprise solutions, we bring a unique 
                  combination of technical excellence and business acumen to every engagement.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Expert Developers</h4>
                    <p className="text-sm text-gray-400">Specialized in modern web technologies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                  <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Dedicated Support</h4>
                    <p className="text-sm text-gray-400">24/7 maintenance and updates</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/*---------------------- Call to Action---------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 lg:p-10">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Build Together?
              </h2>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help transform your ideas into exceptional digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold 
                    rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Start a Project
                  <Zap className="w-5 h-5" />
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 font-semibold 
                    rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:shadow-lg"
                >
                  View Our Work
                  <Code2 className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;