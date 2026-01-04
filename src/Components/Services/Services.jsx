/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { 
  Code2,
  Server,
  Palette,
  Smartphone,
  Globe,
  Database,
  Cloud,
  Cpu,
  Zap,
  ArrowRight,
  Download,
  Mail,
  Layers,
  Shield,
  Rocket,
  Clock,
  Users
} from "lucide-react";
import { myServices, processSteps } from "../../assets/assets";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
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
              Our Expertise
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive<span className="text-primary"> Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We provide end-to-end software development solutions that transform 
            your vision into scalable, high-performance digital products.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 lg:mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {myServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 
                  hover:border-primary/50 p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 group-hover:border-primary/30 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-gray-400 font-medium px-2 py-1 bg-gray-800/50 rounded border border-gray-700">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Our Development Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured approach that ensures quality, transparency, and successful project delivery.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-700 hidden md:block"></div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12 md:mt-20'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 bg-primary rounded-full border-4 border-gray-900"></div>
                  
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 lg:p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-2xl font-bold text-primary">{step.step}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3">Why Choose Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We deliver exceptional value through our unique approach and expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: Users,
                title: "Dedicated Team",
                description: "Your own team of experts committed to your project's success."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing and quality checks at every stage of development."
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "We respect deadlines and deliver projects as scheduled."
              },
              {
                icon: Zap,
                title: "Cutting-Edge Tech",
                description: "Using the latest technologies and best practices."
              },
              {
                icon: Rocket,
                title: "Scalable Solutions",
                description: "Building applications that grow with your business."
              },
              {
                icon: Code2,
                title: "Clean Code",
                description: "Well-documented, maintainable, and efficient codebase."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-5 lg:p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg border border-primary/30">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/*------------------------- Call to Action --------------------*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 lg:p-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create a tailored solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold 
                  rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Get a Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 font-semibold 
                  rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:shadow-lg"
              >
                View Case Studies
                <Download className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;