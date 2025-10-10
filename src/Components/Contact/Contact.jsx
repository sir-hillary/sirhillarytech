import React, { useRef, useState } from "react";
import { Github, Linkedin, Twitter, Mail, Phone, Send, MessageCircle, Facebook } from "lucide-react";
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

    emailjs
      .sendForm(
        PUBLIC_KEY,
        SERVICE_ID,
        TEMPLATE_ID,
        form.current,
      )
      .then(
        () => {
          setLoading(false);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <section id="contact" className="relative py-20 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Info + Socials */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-gray-400">
            Interested in collaborating or just want to say hi?  
            Drop me a message below or reach me via socials.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a href="https://wa.me/254726436088" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full hover:bg-primary-dull transition">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href="https://github.com/sir-hillary" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full hover:bg-primary-dull transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/sirhillary-tech-13827a21b" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full hover:bg-primary-dull transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100075875217577" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-primary rounded-full hover:bg-primary-dull transition">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Direct Info */}
          <div className="space-y-2 mt-6">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-primary" />
              <span>h.o.omondi15@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-primary" />
              <span>+254 726436088</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 bg-zinc-800 rounded-2xl shadow-lg p-8">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-2">Your Name</label>
              <input 
                type="text" 
                name="user_name" 
                required 
                className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Your Email</label>
              <input 
                type="email" 
                name="user_email" 
                required 
                className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea 
                name="message" 
                rows="5" 
                required 
                className="w-full p-3 rounded-lg bg-zinc-900 border border-gray-700 focus:outline-none focus:border-primary"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dull py-3 rounded-lg text-white font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send className="w-5 h-5" />}
            </button>

            {done && (
              <p className="text-green-500 text-center mt-4">
                ✅ Message Sent Successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
