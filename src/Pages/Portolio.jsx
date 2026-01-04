/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Github, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp,
  Layers,
  CheckCircle,
  Clock,
  Globe,
  Database,
  Server,
  Smartphone,
  Cloud,
  Cpu,
  Zap
} from "lucide-react";
import { projects,analytics } from "../assets/assets";

const PortfolioPage = () => {

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Animation variants
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
        duration: 0.5
      }
    }
  };

  // -------------------------Technology icons mapping
  const getTechIcon = (tech) => {
    const icons = {
      'React': <Cpu className="w-3 h-3" />,
      'Node.js': <Server className="w-3 h-3" />,
      'MongoDB': <Database className="w-3 h-3" />,
      'Express': <Server className="w-3 h-3" />,
      'TypeScript': <Code className="w-3 h-3" />,
      'React Native': <Smartphone className="w-3 h-3" />,
      'AWS': <Cloud className="w-3 h-3" />,
      'Docker': <Server className="w-3 h-3" />,
      'Next.js': <Globe className="w-3 h-3" />,
      'Python': <Code className="w-3 h-3" />,
      'Firebase': <Cloud className="w-3 h-3" />,
    };
    return icons[tech] || <Code className="w-3 h-3" />;
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto relative z-10">
        {/*----------------------- Header--------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 lg:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full"></div>
            <span className="text-xs sm:text-sm text-gray-300 font-medium">
              Showcasing Digital Excellence
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            Development<span className="text-primary"> Projects</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-2 sm:px-4">
            Explore our collection of impactful software solutions that deliver 
            measurable business results and exceptional user experiences
          </p>
        </motion.div>

        {/*------------------- Filter/Sort Section---------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-gray-300">
              {projects.development.length} Projects
            </span>
          </div>
        </motion.div>

        {/* -----------------------Projects Grid---------------------------- */}
        <div className="px-1 sm:px-2">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {projects.development.map((project, index) => {
                const isExpanded = expandedDescriptions[project.id || index];
                const showReadMore = project.description.length > 100;
                
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-700/50 
                      p-4 sm:p-6 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 
                      hover:border-primary-dull flex flex-col h-full"
                  >
                    {/* ---------------Project Image------------------ */}
                    <div className="mb-4 sm:mb-6 relative overflow-hidden rounded-lg">
                      <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                        <img
                          src={project.image || "/api/placeholder/300/160"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        {project.completed ? (
                          <span className="inline-flex items-center gap-1 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md border border-green-500/30">
                            <CheckCircle className="w-3 h-3" />
                            <span className="hidden xs:inline">Completed</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md border border-blue-500/30">
                            <Clock className="w-3 h-3" />
                            <span className="hidden xs:inline">In Progress</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/*------------------ Project Content --------------*/}
                    <div className="flex-grow flex flex-col space-y-3 sm:space-y-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        
                        {/*-------------------- Tech Stack------------------------ */}
                        {project.techStack && (
                          <div className="flex flex-wrap gap-1.5 mb-3">
                            {project.techStack.slice(0, 4).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
                              >
                                {getTechIcon(tech)}
                                {tech}
                              </span>
                            ))}
                            {project.techStack.length > 4 && (
                              <span className="inline-flex items-center px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded-md border border-gray-700">
                                +{project.techStack.length - 4} more
                              </span>
                            )}
                          </div>
                        )}
                        
                        <div className="flex-grow">
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {isExpanded ? project.description : truncateText(project.description, 100)}
                          </p>
                          
                          {showReadMore && (
                            <button
                              onClick={() => toggleDescription(project.id || index)}
                              className="mt-2 text-primary hover:text-cyan-400 text-sm font-medium flex items-center gap-1 transition-colors"
                            >
                              {isExpanded ? (
                                <>
                                  <span>Show less</span>
                                  <ChevronUp className="w-4 h-4" />
                                </>
                              ) : (
                                <>
                                  <span>Read more</span>
                                  <ChevronDown className="w-4 h-4" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>

                      {/*-------------------- Project Links ---------------------*/}
                      <div className="pt-3 border-t border-gray-700/50">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-2 sm:gap-3">
                            {project.demo && (
                              <motion.a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="p-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg border border-primary/20 transition-all duration-300"
                                title="Live Demo"
                              >
                                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                              </motion.a>
                            )}
                            {project.link && (
                              <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="p-2 bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 rounded-lg border border-gray-700 transition-all duration-300"
                                title="Source Code"
                              >
                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                              </motion.a>
                            )}
                          </div>
                          
                          {project.category && (
                            <span className="text-xs text-gray-400 font-medium px-2 py-1 bg-gray-800/30 rounded border border-gray-700">
                              {project.category}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/*--------------------my statistics section --------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-center text-white">
            Project Insights
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto">
            {analytics.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-4 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center mb-3 border border-gray-700/50`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 text-white">
                  {stat.value}{stat.label === "Success Rate" ? "%" : ""}
                </h3>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 sm:p-8 shadow-lg">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-white">
              Ready to build something remarkable?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto">
              Let's collaborate on your next software project. Our team specializes in creating 
              scalable, high-performance solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold 
                  rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 text-sm sm:text-base"
              >
                Start a Project
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800/50 border border-gray-700 text-gray-300 font-semibold 
                  rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
              >
                View Case Studies
                <Code className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;