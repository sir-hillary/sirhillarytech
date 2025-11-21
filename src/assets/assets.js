import sandwich_img from "./sandwich_project.png";
import nyamaverse from "./nyamaverse_project.png";
import burger from "./burger-project.png";
import klock_logo from "./klock_project.webp";
import minimal_logo from "./minimalistic-logo-project.webp";
import velocity_logo from "./velocityfitness_design.png";
import event_banner from "./youthconvention_banner.png";
import ava_logo from "./AVA_logo.webp";
import smartBlog from "./smartblog_img.png";
import smartGPT from "./smartgpt_img.png";
import agency_AI from "./agency_ai.png";
import GreenCart from "./greencart_img.png";
import mediTrack from "./meditrack_img.png";
import mkulima_img from "./mkulima_img.png";
import myWebsite from "./myWebsite_img.png";
import jackyLogo from './jacky-logo-img.png';
import mern_auth from './mern_auth.png';

import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const projects = {
  development: [
    {
      title: "SMARTGPT AI Chatbot Clone – Fullstack MERN Application",
      description:
        "Create images and text content with this AI clone made with MERN stack technologies. Its fast and responsive with all devices",
      link: "https://github.com/sir-hillary/SmartGPT.git",
      demo: "https://smart-gpt-swart.vercel.app",
      completed: true,
      image: smartGPT,
    },

    {
      title: "SmartBlog – Create Smarter, Blog Faster",
      description:
        "SmartBlog is an AI-powered blogging platform that helps creators write and publish blogs effortlessly. It saves time, boosts creativity, and makes content creation simple for bloggers, brands, and marketers alike.",
      link: "https://github.com/sir-hillary/SMARTBLOG.git",
      demo: "https://smartblog-inky.vercel.app",
      completed: true,
      image: smartBlog,
    },
    {
      title: "GreenCart – Smart Grocery Shopping Made Easy",
      description:
        "A fullstack MERN e-commerce platform that helps customers order fresh groceries quickly and conveniently from local vendors, saving time while ensuring quality and accessibility.",
      link: "https://github.com/sir-hillary/greencart-ecommerce-web-app",
      demo: "https://greencartecommerce.vercel.app",
      completed: true,
      image: GreenCart,
    },
    {
      title: "Mkulima Connect Africa – Growing Digital Agriculture",
      description:
        "Mkulima Connect Africa is a professional client landing page designed to connect farmers, buyers, and agri-entrepreneurs across Africa. It promotes agricultural visibility, fosters trust, and bridges the gap between farmers and the digital market.",
      link: "https://github.com/sir-hillary/Mkulima-Connect-Project.git",
      demo: "https://mkulimaconnectafrica.netlify.app",
      completed: true,
      image: mkulima_img,
    },
    {
      title: "Agency.ai – Digital Marketing Website",
      description:
        "A modern, responsive single-page website built for digital marketing agencies to attract clients and boost online visibility. Designed to convert visitors into leads through sleek visuals, clear messaging, and strong calls-to-action.",
      link: "https://github.com/sir-hillary/agency-ai.git",
      demo: "https://agency-ai-gamma-six.vercel.app",
      completed: true,
      image: agency_AI,
    },
    
    {
      title: "MediTrack – Pharmacy Management System",
      description:
        "A full-stack MERN web app that helps pharmacy owners and staff efficiently manage drug inventory, sales, and transactions in real time. MediTrack simplifies daily operations with smart analytics, role-based access, and an intuitive dashboard interface.",
      link: "https://github.com/sir-hillary/meditrack",
      demo: "https://jackypharmaceuticals.vercel.app",
      completed: true,
      image: mediTrack,
    },
    {
      title: "My Portfolio",
      description: "This is my sleek newly updated portfolio website that showcases my services and projects.",
      link: "https://github.com/sir-hillary/sirhillarytech",
      demo: "https://sirhillarytech.vercel.app",
      completed: true,
      image: myWebsite
    },
    {
      title: "A movie ticketing app BACKEND API.",
      description:
        "A movie ticketing app api that controls authentication, adding new shows, controls booking of the show, role based authentication and many more features.",
      link: "https://github.com/sir-hillary/movie-ticket-booking",
      demo: "https://quick-show-psi-seven.vercel.app",
      completed: false,
    },
    {
      title: "Secure MERN Authentication System",
      description: "A full-stack authentication solution with JWT login, email verification, and password reset. Built with React, Tailwind CSS, Node.js, Express, and MongoDB, it delivers a secure and seamless user experience for modern web apps.",
      link: "https://github.com/sir-hillary/MERN-AUTH",
      demo: "https://mern-auth-six-eta.vercel.app",
      completed: true,
      image: mern_auth
    },
  ],
  design: [
    {
      title: "Jackies Pharmaceuticals logo design",
      description: "A Canva-designed jackie's pharmaceuticals for a website i designed",
      image: jackyLogo,
    },
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
    {
      title: "A really cool but simple logo of AVA brand",
      description: "Creating logo that outshines your expectation.",
      image: ava_logo,
    },
  ],
};

 export const socialLinks = [
              {
                icon: FaWhatsapp,
                href: "https://wa.me/254101703739",
                label: "WhatsApp",
              },
              {
                icon: FaLinkedin,
                href: "https://www.linkedin.com/in/sirhillary-tech-13827a21b",
                label: "LinkedIn",
              },
              {
                icon: FaFacebook,
                href: "https://www.facebook.com/profile.php?id=100075875217577",
                label: "Facebook",
              },
              {
                icon: FaGithub,
                href: "https://github.com/sir-hillary",
                label: "LinkedIn",
              },
            ]
