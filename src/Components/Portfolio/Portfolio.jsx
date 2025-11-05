// Portfolio.jsx
import { useState } from "react";
import { Code, Palette, Github, ExternalLink } from "lucide-react";
import { projects } from "../../assets/assets";


export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("development");

  return (
    <section
      id="portfolio"
      className="relative w-full py-20 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-gray-400 mb-10">
          A showcase of my work in{" "}
          <span className="text-primary">web development</span> and{" "}
          <span className="text-primary">graphic design</span>.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setActiveTab("development")}
            className={`px-6 py-2 rounded-xl font-semibold flex items-center gap-2 transition-all ${
              activeTab === "development"
                ? "bg-primary text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <Code className="w-5 h-5" /> Development
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-6 py-2 rounded-xl font-semibold flex items-center gap-2 transition-all ${
              activeTab === "design"
                ? "bg-primary text-white"
                : "bg-gray-800 hover:bg-gray-700"
            }`}
          >
            <Palette className="w-5 h-5" /> Design
          </button>
        </div>

        {/* Projects Grid */}
        {activeTab === "development" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.development.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-primary/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dull transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dull transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                {project.completed ? <p className="text-sm bg-green-400 text-white px-6 py-1 rounded-md w-32 mt-4">Completed</p> : <p className="text-sm bg-orange-400 text-white px-4 py-1 rounded-md w-32 mt-4">Ongoing...</p>}
              </div>
            ))}
          </div>
        )}

        {activeTab === "design" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.design.map((project, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-primary/30 transition-all"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
