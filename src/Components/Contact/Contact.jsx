/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setLoading(false);
        setDone(true);
        form.current.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setDone(false), 5000);
      },
      (error) => {
        setLoading(false);
        console.error("Email sending failed:", error.text);
      }
    );
  };

  const socialLinks = [
    {
      icon: FaWhatsapp,
      href: "https://wa.me/254101703739",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
    {
      icon: FaGithub,
      href: "https://github.com/sir-hillary",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/sirhillary-tech-13827a21b",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/profile.php?id=100075875217577",
      label: "Facebook",
      color: "hover:text-blue-500",
    },
  ];

  const contactInfo = [
    {
      icon: FaEnvelope,
      text: "h.o.omondi15@gmail.com",
      href: "mailto:h.o.omondi15@gmail.com",
      label: "Email",
    },
    {
      icon: FaPhone,
      text: "+254 7101703739",
      href: "tel:+2547101703739",
      label: "Phone",
    },
    {
      icon: FaMapMarkerAlt,
      text: "Nairobi, Kenya",
      href: "#",
      label: "Location",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-cyan-500/5 rounded-full blur-3xl"></div>
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
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Connect
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Interested in collaborating or just want to say hi? I'm always open
            to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 
                              hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div
                      className="p-3 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg border border-gray-700/50 
                                  group-hover:border-primary/30 transition-colors duration-300"
                    >
                      <info.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">
                        {info.text}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 
                              hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon
                      className={`w-5 h-5 text-gray-400 ${social.color} transition-colors duration-300`}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 lg:p-8 shadow-xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
                              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                              text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
                              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                              text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
                              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                              text-white placeholder-gray-500 resize-none transition-all duration-300"
                    placeholder="Tell me about your project or just say hello..."
                  ></textarea>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-semibold 
                          transition-all duration-300 ${
                            loading
                              ? "bg-gray-600 cursor-not-allowed"
                              : "bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
                          }`}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>

              {/* Success Message */}
              {done && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-400/30 rounded-xl text-green-400 text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
