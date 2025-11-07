import { useState } from "react";
import { Code, Palette, Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../assets/assets";

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("development");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (projectId) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            My Portfolio
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl lg:max-w-3xl mx-auto px-4">
            A comprehensive showcase of my work in{" "}
            <span className="text-primary">web development</span> and{" "}
            <span className="text-primary">graphic design</span>. 
            Explore my projects and creative solutions.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 lg:gap-6 mb-12 lg:mb-16 px-4">
          <button
            onClick={() => setActiveTab("development")}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all text-sm sm:text-base lg:text-lg ${
              activeTab === "development"
                ? "bg-primary text-white shadow-lg shadow-primary/30 transform scale-105"
                : "bg-gray-800 hover:bg-gray-700 hover:scale-105"
            }`}
          >
            <Code className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> 
            <span>Development</span>
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-xl font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all text-sm sm:text-base lg:text-lg ${
              activeTab === "design"
                ? "bg-primary text-white shadow-lg shadow-primary/30 transform scale-105"
                : "bg-gray-800 hover:bg-gray-700 hover:scale-105"
            }`}
          >
            <Palette className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> 
            <span>Design</span>
          </button>
        </div>

        {/* Projects Section */}
        <div className="px-2 sm:px-4">
          {/* Development Projects */}
          {activeTab === "development" && (
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center">
                Development Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {projects.development.map((project, index) => {
                  const isExpanded = expandedDescriptions[project.id || index];
                  const showReadMore = project.description.length > 120;
                  
                  return (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full"
                    >
                      {/* Project Image */}
                      <div className="mb-3">
                        <img
                          src={project.image || "/api/placeholder/300/160"}
                          alt={project.title}
                          className="rounded-lg w-full h-32 sm:h-36 object-cover shadow-md"
                        />
                      </div>

                      {/* Project Content */}
                      <div className="flex-grow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        
                        <div className="flex-grow">
                          <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            {isExpanded ? project.description : truncateText(project.description)}
                          </p>
                          
                          {showReadMore && (
                            <button
                              onClick={() => toggleDescription(project.id || index)}
                              className="text-primary hover:text-primary-dull text-xs font-medium flex items-center gap-1 transition-colors mb-3"
                            >
                              {isExpanded ? (
                                <>
                                  <span>Show less</span>
                                  <ChevronUp className="w-3 h-3" />
                                </>
                              ) : (
                                <>
                                  <span>Read more</span>
                                  <ChevronDown className="w-3 h-3" />
                                </>
                              )}
                            </button>
                          )}
                        </div>

                        {/* Project Links and Status */}
                        <div className="space-y-3 pt-2 border-t border-gray-700">
                          <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-dull transition transform hover:scale-110 p-1"
                                title="Live Demo"
                              >
                                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                              </a>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary-dull transition transform hover:scale-110 p-1"
                                title="Source Code"
                              >
                                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                              </a>
                            </div>
                            {project.completed ? (
                              <span className="text-xs bg-green-400 text-white px-2 py-1 rounded-md whitespace-nowrap">
                                Completed
                              </span>
                            ) : (
                              <span className="text-xs bg-orange-400 text-white px-2 py-1 rounded-md whitespace-nowrap">
                                Ongoing...
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Design Projects */}
          {activeTab === "design" && (
            <section>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12 text-center">
                Design Projects
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {projects.design.map((project, index) => {
                  const isExpanded = expandedDescriptions[project.id || index];
                  const showReadMore = project.description.length > 120;
                  
                  return (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full"
                    >
                      {/* Project Image */}
                      <div className="mb-3">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="rounded-lg w-full h-32 sm:h-36 object-cover shadow-md"
                        />
                      </div>

                      {/* Project Content */}
                      <div className="flex-grow flex flex-col">
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {project.title}
                        </h3>
                        
                        <div className="flex-grow">
                          <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            {isExpanded ? project.description : truncateText(project.description)}
                          </p>
                          
                          {showReadMore && (
                            <button
                              onClick={() => toggleDescription(project.id || index)}
                              className="text-primary hover:text-primary-dull text-xs font-medium flex items-center gap-1 transition-colors"
                            >
                              {isExpanded ? (
                                <>
                                  <span>Show less</span>
                                  <ChevronUp className="w-3 h-3" />
                                </>
                              ) : (
                                <>
                                  <span>Read more</span>
                                  <ChevronDown className="w-3 h-3" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20 text-center px-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-8 lg:mb-12">
            Project Statistics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg lg:rounded-xl p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
                {projects.development.length + projects.design.length}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">Total Projects</p>
            </div>
            <div className="bg-gray-800 rounded-lg lg:rounded-xl p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
                {projects.development.length}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">Development Projects</p>
            </div>
            <div className="bg-gray-800 rounded-lg lg:rounded-xl p-4 sm:p-6 hover:transform hover:scale-105 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-2">
                {projects.design.length}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">Design Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;