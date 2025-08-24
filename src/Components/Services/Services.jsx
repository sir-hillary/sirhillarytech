import React from "react";
import { Code2, Paintbrush, Database, Smartphone, FileDown, Mail } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Fullstack Development",
      desc: "Building sleek, scalable, and responsive web applications with the MERN stack.",
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend Engineering",
      desc: "Designing secure, fast, and reliable APIs with Node.js, Express, and MongoDB.",
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-primary" />,
      title: "Creative Design",
      desc: "Crafting beautiful, user-centric designs with Figma, Canva, and modern UI principles.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Responsive Web Design",
      desc: "Delivering pixel-perfect, mobile-friendly experiences with React and Tailwind CSS.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-zinc-900 via-zinc-950 to-black py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-14">
          I combine creativity and technical expertise to deliver impactful digital solutions 
          that bring ideas to life and create lasting impressions.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-zinc-800/40 border border-zinc-700 rounded-2xl p-8 flex flex-col items-center text-center 
                        hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition duration-300 ease-in-out"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-zinc-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-primary hover:bg-primary-dull text-white px-6 py-3 rounded-xl shadow-lg 
                       transition duration-300 ease-in-out"
          >
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 text-white px-6 py-3 rounded-xl 
                       shadow-lg transition duration-300 ease-in-out"
          >
            <Mail className="w-5 h-5 text-primary" />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
