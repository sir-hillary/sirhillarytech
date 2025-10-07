// Portfolio.jsx
import { useState } from "react";
import { Code, Palette, Github, ExternalLink } from "lucide-react";
import sandwich_img from "../../assets/sandwich_project.png";
import nyamaverse from "../../assets/nyamaverse_project.png";
import burger from "../../assets/burger-project.png";
import klock_logo from "../../assets/klock_project.webp";
import minimal_logo from "../../assets/minimalistic-logo-project.webp";
import velocity_logo from "../../assets/velocityfitness_design.png";
import event_banner from "../../assets/youthconvention_banner.png";

const projects = {
  development: [
    {
      title: "A movie ticketing app BACKEND API.",
      description:
        "A movie ticketing app api that controls authentication, adding new shows, controls booking of the show, role based authentication and many more features.",
      link: "https://github.com/sir-hillary/movie-ticket-booking/",
      demo: "https://quick-show-psi-seven.vercel.app/",
    },
    {
      title: "SMARTGPT AI Chatbot Clone – Fullstack MERN Application",
      description:
      "A fullstack AI-powered chatbot built with the MERN stack, featuring secure authentication, credit-based payment plans, and seamless integration with OpenAI for text and image generation. Users can create custom prompts, receive intelligent responses, and generate images, all while enjoying a sleek dark mode UI. Image assets are managed with ImageKit, ensuring smooth storage and delivery. This project demonstrates my ability to build complete, production-ready web applications—from backend APIs to a responsive frontend with modern UI/UX.",
      link: "https://github.com/sir-hillary/SmartGPT.git",
      demo: "https://smart-gpt-swart.vercel.app",
    },
    {
      title: "Expense-Tracker app",
      description: "Track Expenses easily using UI and localstorage.",
      link: "https://github.com/sir-hillary/expense-tracker.git",
      demo: "https://sir-hillary.github.io/expense-tracker/",
    },
    {
      title: "QuickBlog – Create Smarter, Blog Faster",
      description: "QuickBlog is an AI-powered blogging platform that helps creators write and publish blogs effortlessly. It saves time, boosts creativity, and makes content creation simple for bloggers, brands, and marketers alike.",
      link: "https://github.com/sir-hillary/SMARTBLOG.git",
      demo: "https://quickblog-eight-nu.vercel.app",
    },
     {
      title: "Mkulima Connect Africa – Growing Digital Agriculture",
      description: "Mkulima Connect Africa is a professional client landing page designed to connect farmers, buyers, and agri-entrepreneurs across Africa. It promotes agricultural visibility, fosters trust, and bridges the gap between farmers and the digital market.",
      link: "https://github.com/sir-hillary/Mkulima-Connect-Project.git",
      demo: "https://mkulimaconnectafrica.netlify.app/",
    },

  ],
  design: [
    {
      title: "SandWich Ad Poster",
      description: "A Canva-designed sandwich poster that markets the brand.",
      image: sandwich_img,
    },
    {
      title: "Restaurant Logo Design",
      description:
        "Professional real restaurant logo that is meant to picture its quality in offering food.",
      image: nyamaverse,
    },
    {
      title: "Burger Ad Poster",
      description:
        "Building your brand with nice posters for social media marketing.",
      image: burger,
    },
    {
      title: "Klock Cigar Logo",
      description: "Clean, minimal and aesthetic logo.",
      image: klock_logo,
    },
    {
      title: "A super cool minimalistic logo.",
      description: "Building your brand with nice logos to match your brand.",
      image: minimal_logo,
    },
    {
      title: "VelocityFitnessGym Logo",
      description:
        "Building your fitness brand with a beautiful and sleek logo.",
      image: velocity_logo,
    },
    {
      title: "A banner for for a group event.",
      description: "Building events banners to unite and attract audience.",
      image: event_banner,
    },
  ],
};

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
