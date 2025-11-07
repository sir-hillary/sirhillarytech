/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Palette, Github, ExternalLink, ArrowRight, Star, Calendar, Clock } from "lucide-react";
import { projects } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("development");
  const navigate = useNavigate();

  // Filter projects to show only 3 featured ones for homepage
  const featuredDevelopment = projects.development.slice(0, 3);
  const featuredDesign = projects.design.slice(0, 3);

  const handleViewAllProjects = () => {
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

  const getTechStack = (project) => {
    return project.techStack || ["React", "Node.js", "MongoDB"];
  };

  return (
    <section
      id="portfolio"
      className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm text-gray-300 font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated selection of my best work in{" "}
            <span className="text-primary">web development</span> and{" "}
            <span className="text-primary">graphic design</span>.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 lg:mb-16"
        >
          <button
            onClick={() => setActiveTab("development")}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-3 transition-all ${
              activeTab === "development"
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-primary/30 transform scale-105"
                : "bg-gray-800 hover:bg-gray-700 hover:scale-105 border border-gray-700/50 hover:border-primary/30"
            }`}
          >
            <Code className="w-5 h-5" /> Development
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-3 transition-all ${
              activeTab === "design"
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-primary/30 transform scale-105"
                : "bg-gray-800 hover:bg-gray-700 hover:scale-105 border border-gray-700/50 hover:border-primary/30"
            }`}
          >
            <Palette className="w-5 h-5" /> Design
          </button>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activeTab === "development" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredDevelopment.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 
                            hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 
                            transition-all duration-500 overflow-hidden"
                >
                  {/* Project Image with Overlay */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/api/placeholder/400/240"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project Status Badge */}
                    <div className="absolute top-4 right-4">
                      {project.completed ? (
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-400/30 backdrop-blur-sm">
                          Completed
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-medium rounded-full border border-orange-400/30 backdrop-blur-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Ongoing
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Project Title & Description */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {getTechStack(project).slice(0, 3).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50 
                                     group-hover:border-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {getTechStack(project).length > 3 && (
                          <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-md">
                            +{getTechStack(project).length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      <div className="flex gap-3">
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-gray-700/50 hover:bg-primary/20 rounded-lg transition-all duration-300 group/link"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-primary transition-colors" />
                        </motion.a>
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2 bg-gray-700/50 hover:bg-primary/20 rounded-lg transition-all duration-300 group/link"
                          title="Source Code"
                        >
                          <Github className="w-4 h-4 text-gray-400 group-hover/link:text-primary transition-colors" />
                        </motion.a>
                      </div>
                      
                      {/* Project Date */}
                      {project.date && (
                        <div className="flex items-center gap-1 text-gray-500 text-xs">
                          <Calendar className="w-3 h-3" />
                          {project.date}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "design" && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuredDesign.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 
                            hover:border-primary/30 shadow-lg hover:shadow-2xl hover:shadow-primary/10 
                            transition-all duration-500 overflow-hidden"
                >
                  {/* Design Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Design Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full border border-purple-400/30 backdrop-blur-sm">
                        Design
                      </span>
                    </div>
                  </div>

                  {/* Design Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Design Tools */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {["Figma", "Adobe XD", "Canva"].slice(0, 2).map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50 
                                     group-hover:border-primary/20 transition-colors duration-300"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Project Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-gray-700/50 hover:bg-primary/20 border border-gray-600/50 
                                hover:border-primary/30 text-gray-300 hover:text-white rounded-lg 
                                transition-all duration-300 text-sm font-medium"
                    >
                      View Design
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.button
            onClick={handleViewAllProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 
              text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-purple-500/25 
              transition-all duration-300 flex items-center gap-3 mx-auto group/btn"
          >
            View Full Portfolio
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <p className="text-gray-500 text-sm mt-4">
            Showing {activeTab === "development" ? featuredDevelopment.length : featuredDesign.length} of {activeTab === "development" ? projects.development.length : projects.design.length} projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;