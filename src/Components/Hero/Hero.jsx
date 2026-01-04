/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Code, 
  Zap,
  ArrowRight,
  Shield,
  Rocket
} from "lucide-react";
import { keyFeatures, techStack, clientStats, solutions } from "../../assets/assets";

const HomePage = () => {

  const techIcons = [
    { icon: <Code className="w-6 h-6" />, color: "text-primary" },
    { icon: <Shield className="w-6 h-6" />, color: "text-cyan-400" },
    { icon: <Rocket className="w-6 h-6" />, color: "text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* --------------Hero Section------------------------ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-24">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          
          {/*------------------------- Animated Particles--------------------------------- */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{ 
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                opacity: 0 
              }}
              animate={{ 
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column: Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl"
              >
                <div className="flex gap-1">
                  {techIcons.map((tech, idx) => (
                    <div key={idx} className={`${tech.color} bg-gray-900/50 p-2 rounded-lg`}>
                      {tech.icon}
                    </div>
                  ))}
                </div>
                <span className="text-sm lg:text-base text-gray-300 font-medium">
                  Crafting Digital Excellence Since 2022
                </span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                >
                  <span className="block text-white">Secure by Design,</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dull">
                    Built to Scale
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-xl lg:text-2xl text-gray-300 leading-relaxed"
                >
                  We build thoughtfully{" "}
                  <span className="text-primary font-semibold">designed</span> and{" "}
                  <span className="text-primary font-semibold">securely engineered</span>{" "}
                  digital products—from robust authentication systems to enterprise-grade web applications.
                </motion.p>
              </div>

              {/*------------------ Key Features----------------------------- */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50"
                  >
                    <div className={`p-2 rounded-lg ${feature.color.replace('text-', 'bg-')}/20`}>
                      <feature.icon className={`w-4 h-4 ${feature.color}`} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-sm font-semibold text-white">{feature.title}</h3>
                      <p className="text-xs text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dull font-semibold 
                    rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 
                    flex items-center justify-center gap-3"
                >
                  Start Your Project
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
                    text-gray-200 font-semibold rounded-xl hover:shadow-xl hover:border-primary/30 
                    transition-all duration-300 flex items-center justify-center gap-3"
                >
                  View Case Studies
                  <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* ---------------------------Right Column: Tech Visualization----------- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative max-w-xl mx-auto lg:ml-auto">
                {/*---------------------- Main Tech Card --------------------------*/}
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl 
                  rounded-3xl border border-gray-700/50 p-8 shadow-2xl shadow-primary/10">
                  
                  {/* ---------------------Header---------------------------- */}
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-sm text-gray-400 font-mono">
                        codecraft solutions
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                      <span>LIVE</span>
                    </div>
                  </div>

                  {/* -------------------------Code Visualization ------------------------------*/}
                  <div className="space-y-5 mb-10">
                    {[75, 85, 65, 90].map((width, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ width: 0 }}
                        animate={{ width: `${width}%` }}
                        transition={{ duration: 1.5, delay: idx * 0.2 + 1 }}
                        className="h-3 rounded-full bg-gradient-to-r from-primary to-cyan-500"
                      />
                    ))}
                  </div>

                  {/*--------------------- Tech Stack Grid--------------------- */}
                  <div className="grid grid-cols-3 gap-4">
                    {techStack.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 + 1.5 }}
                        className="group p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 
                          hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="flex flex-col items-center text-center gap-2">
                          <div className="p-2 bg-gray-900/50 rounded-lg">
                            <tech.icon className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-sm font-semibold text-white">{tech.name}</h4>
                          <p className="text-xs text-gray-400">{tech.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/*------------------------- Floating Elements  on the top right corner ------------------*/}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 }}
                    className="absolute -top-4 -right-4 px-4 py-2 bg-gray-900/80 backdrop-blur-sm rounded-full 
                      border border-primary/30 shadow-lg"
                  >
                    <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      Enterprise Ready
                    </span>
                  </motion.div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 rounded-3xl blur-3xl -z-10"></div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {clientStats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-gray-400"
            >
              <span className="text-sm font-medium">Explore Our Work</span>
              <ChevronRight className="w-5 h-5 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">CodeCraft?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help you build secure, scalable, and impactful digital solutions.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold 
                  rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;