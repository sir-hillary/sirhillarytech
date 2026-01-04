/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { socialLinks, contactInfo } from "../assets/assets";

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
        // reset
        setTimeout(() => setDone(false), 5000);
      },
      (error) => {
        setLoading(false);
        console.error("Email sending failed:", error.text);
      }
    );
  };

  // Embakasi, Nairobi coordinates
  const MAP_LOCATION = {
    lat: -1.3076,
    lng: 36.9041,
    zoom: 14,
    marker: "CodeCraft solutions - Embakasi",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* ---------------------Page Header------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300 font-medium">
              Let's Build Together
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can transform your
            digital vision into reality. Our team is ready to help you build
            exceptional experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* ----------------------------------------Contact Information Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 lg:p-8 shadow-xl">
              <h2 className="text-2xl font-semibold text-white mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 
                              hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <div
                      className="p-3 bg-gradient-to-br from-primary/10 to-cyan-500/10 rounded-lg border border-gray-700/50 
                                group-hover:border-primary/30 transition-colors duration-300 flex-shrink-0"
                    >
                      <info.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">
                        {info.text}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/*---------------------- Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Follow Our Journey
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
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
            </div>

            {/* -----------------------Working hours*/}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 lg:p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-6">
                Working hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg bg-gray-800/50"
                  >
                    <span className="text-gray-300">{schedule.day}</span>
                    <span className="text-primary font-medium">
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* -----------------------------Map and Form Section------------------- */}
          <div className="lg:col-span-2 space-y-8">
            {/*-------------------------------------- Map Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                Visit Our Office
              </h2>
              <div className="aspect-video rounded-xl overflow-hidden border border-gray-700/50">
                <iframe
                  src={`https://maps.google.com/maps?q=${MAP_LOCATION.lat},${MAP_LOCATION.lng}&z=${MAP_LOCATION.zoom}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CodeCraft solutions Location - Embakasi, Nairobi"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>
              <div className="mt-4 flex items-center gap-2 text-gray-400">
                <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                <p className="text-sm">
                  {MAP_LOCATION.marker} - Nairobi, Kenya
                </p>
              </div>
            </motion.div>

            {/* ------------------------------------Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 lg:p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">
                Send Us a Message
              </h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
                                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                                text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="Full name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
                                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                                text-white placeholder-gray-500 transition-all duration-300"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
                              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                              text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="Project inquiry or general question"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl 
                              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 
                              text-white placeholder-gray-500 resize-none transition-all duration-300"
                    placeholder="Tell us about your project, timeline, and budget..."
                  ></textarea>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="rounded"
                  />
                  <label htmlFor="consent">
                    I agree to the processing of my personal data for the
                    purpose of this inquiry
                  </label>
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
                                : "bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-primary/25"
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
                      ✅ Message sent successfully! Our team will contact you
                      within 24 hours.
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        {/* Response Time Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/20 rounded-lg border border-primary/30">
                <FaPhone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-white">
                  Need Immediate Assistance?
                </h3>
                <p className="text-sm text-gray-400">
                  Call us directly at +254 726 436 088
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>Typical response time: 1-2 business days</p>
              <p>Emergency support available 24/7 for existing clients</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
