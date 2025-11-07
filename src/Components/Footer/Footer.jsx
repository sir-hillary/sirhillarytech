import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import logo from "../../assets/logo.png";

const  Footer = ()=> {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100075875217577", label: "Facebook" },
    { icon: MessageCircle, href: "https://wa.me/2547101703739", label: "WhatsApp" },
    { icon: Github, href: "https://github.com/sir-hillary", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sirhillary-tech-13827a21b", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: Mail, text: "h.o.omondi15@gmail.com", href: "mailto:h.o.omondi15@gmail.com" },
    { icon: Phone, text: "+254 726 436 088", href: "tel:+254726436088" },
    { icon: MapPin, text: "Nairobi, Kenya", href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A0A0B] to-black text-gray-300 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <div className="flex flex-col space-y-4">
              <img 
                src={logo} 
                alt="Hillary Omondi Logo" 
                className="w-32 h-auto cursor-pointer opacity-90 hover:opacity-100 transition-all duration-300 hover:scale-105 mb-2" 
              />
              
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed max-w-md">
                Crafting Web & Mobile Experiences • Fullstack MERN Developer • Graphic Designer 
                <br />
               Crafting sleek, modern, and engaging web & mobile experiences with a touch of design.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-2 bg-gray-800/50 hover:bg-primary/20 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                    aria-label={social.label}
                  >
                    <social.icon 
                      size={18} 
                      className="text-gray-400 group-hover:text-primary transition-colors duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group text-gray-400 hover:text-white transition-all duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold text-white mb-6 tracking-wide relative inline-block">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="group flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                      <contact.icon 
                        size={16} 
                        className="text-primary group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <span className="text-sm lg:text-base group-hover:translate-x-1 transition-transform duration-300">
                      {contact.text}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-gray-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <p className="text-xs text-gray-500 tracking-wide">
                © {currentYear}{" "}
                <span className=" font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  SirhillaryTech
                </span>
                . All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <span>Crafted with</span>
              <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
              <span>and passion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer