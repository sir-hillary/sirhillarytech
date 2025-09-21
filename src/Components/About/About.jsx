import React from "react";
import about_img from "../../assets/about_img.png"; 

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#09090B] text-white px-6 sm:px-12 lg:px-20 py-20"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative group">
            <img
              src={about_img}
              alt="About Me"
              className="w-72 sm:w-80 md:w-96 lg:w-[420px] rounded-2xl shadow-2xl border-2 border-primary transition-transform duration-500 group-hover:scale-105"
            />
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-primary opacity-30 blur-3xl rounded-2xl -z-10"></div>
         </div>
        </div>

        {/* Right: Text */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-dull bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Hi, I’m <span className="font-semibold text-white">Omondi Hillary</span>, 
            a passionate <span className="text-primary">MERN Fullstack Developer</span> 
            and <span className="text-primary">Creative Designer</span>.  
            I specialize in building sleek, responsive, and scalable digital 
            experiences that merge functionality with modern design.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-300 mt-4">
            {[
              "HTML5 & CSS3",
              "JavaScript (ES6+)",
              "React.js",
              "Node.js & Express.js",
              "MongoDB",
              "Tailwind CSS",
              "Figma",
              "Canva",
              "WordPress",
              "UI/UX Design",
              "REST APIs",
              "Git & GitHub",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#18181B] hover:bg-primary hover:text-white px-4 py-2 rounded-xl text-sm sm:text-base font-medium text-center transition duration-300 shadow-md cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary hover:bg-primary-dull rounded-xl font-semibold text-white transition shadow-lg"
            >
              Let’s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
