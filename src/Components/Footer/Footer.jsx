 
// Footer.jsx
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/light-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0A0A0B] to-black text-gray-300 py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand / Intro */}
<div>
  <img 
    src={logo} 
    alt="Logo" 
    className="w-28 md:w-32 h-auto cursor-pointer opacity-90 hover:opacity-100 transition duration-300 drop-shadow-md mb-4" 
  />
  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
    Frontend Developer • Graphic Designer • MERN Enthusiast <br />
    Building sleek, modern, and professional digital experiences.
  </p>
  <div className="flex space-x-4 mt-6">
    <a href="https://facebook.com" target="_blank" className="hover:text-primary transition"><Facebook size={20} /></a>
    <a href="https://twitter.com" target="_blank" className="hover:text-primary transition"><Twitter size={20} /></a>
    <a href="https://instagram.com" target="_blank" className="hover:text-primary transition"><Instagram size={20} /></a>
    <a href="https://linkedin.com" target="_blank" className="hover:text-primary transition"><Linkedin size={20} /></a>
    <a href="https://github.com" target="_blank" className="hover:text-primary transition"><Github size={20} /></a>
  </div>
</div>


        {/* Quick Links */}
        <div className="md:text-center">
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { name: "About Me", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Contact", href: "#contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Get In Touch</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center space-x-3">
              <Mail size={18} className="text-primary" />
              <span className="hover:text-primary transition">h.o.omondi15@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={18} className="text-primary" />
              <span className="hover:text-primary transition">+254 726 436 088</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin size={18} className="text-primary" />
              <span className="hover:text-primary transition">Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-xs text-gray-500 tracking-wide">
        © {new Date().getFullYear()} <span className="text-white font-medium">Hillary Omondi</span>. All rights reserved.
      </div>
    </footer>
  );
}
