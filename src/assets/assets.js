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
import jackyLogo from "./jacky-logo-img.png";
import mern_auth from "./mern_auth.png";
import kuza_career from "./kuzacareer.png";

import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import {
  Award,
  CheckCircle,
  Clock,
  Cloud,
  Code,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Lock,
  Palette,
  Rocket,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

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
      techStack: ["React", "Node.js", "MongoDB", "Express", "OpenAI API"],
      category: "AI Application",
    },

    {
      title: "SmartBlog – Create Smarter, Blog Faster",
      description:
        "SmartBlog is an AI-powered blogging platform that helps creators write and publish blogs effortlessly. It saves time, boosts creativity, and makes content creation simple for bloggers, brands, and marketers alike.",
      link: "https://github.com/sir-hillary/SMARTBLOG.git",
      demo: "https://smartblog-inky.vercel.app",
      completed: true,
      image: smartBlog,
      techStack: ["React", "Node.js", "MongoDB", "Express", "AI Integration"],
      category: "Content Platform",
    },
    {
      title: "GreenCart – Smart Grocery Shopping Made Easy",
      description:
        "A fullstack MERN e-commerce platform that helps customers order fresh groceries quickly and conveniently from local vendors, saving time while ensuring quality and accessibility.",
      link: "https://github.com/sir-hillary/greencart-ecommerce-web-app",
      demo: "https://greencartecommerce.vercel.app",
      completed: true,
      image: GreenCart,
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      category: "E-commerce",
    },
    {
      title: "Mkulima Connect Africa – Growing Digital Agriculture",
      description:
        "Mkulima Connect Africa is a professional client landing page designed to connect farmers, buyers, and agri-entrepreneurs across Africa. It promotes agricultural visibility, fosters trust, and bridges the gap between farmers and the digital market.",
      link: "https://github.com/sir-hillary/Mkulima-Connect-Project.git",
      demo: "https://mkulimaconnectafrica.netlify.app",
      completed: true,
      image: mkulima_img,
      techStack: ["React", "Tailwind CSS", "EmailJS", "Netlify"],
      category: "Landing Page",
    },
    {
      title: "Agency.ai – Digital Marketing Website",
      description:
        "A modern, responsive single-page website built for digital marketing agencies to attract clients and boost online visibility. Designed to convert visitors into leads through sleek visuals, clear messaging, and strong calls-to-action.",
      link: "https://github.com/sir-hillary/agency-ai.git",
      demo: "https://agency-ai-gamma-six.vercel.app",
      completed: true,
      image: agency_AI,
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Business Website",
    },

    {
      title: "MediTrack – Pharmacy Management System",
      description:
        "A full-stack MERN web app that helps pharmacy owners and staff efficiently manage drug inventory, sales, and transactions in real time. MediTrack simplifies daily operations with smart analytics, role-based access, and an intuitive dashboard interface.",
      link: "https://github.com/sir-hillary/meditrack",
      demo: "https://jackypharmaceuticals.vercel.app",
      completed: true,
      image: mediTrack,
      techStack: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
      category: "Management System",
    },
    {
      title: "My Portfolio",
      description:
        "This is my sleek newly updated portfolio website that showcases my services and projects.",
      link: "https://github.com/sir-hillary/sirhillarytech",
      demo: "https://sirhillarytech.vercel.app",
      completed: true,
      image: myWebsite,
      techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Portfolio",
    },
    {
      title: "KuzaCareer AI — Smart Resume Builder",
      description:
        "KuzaCareer AI is a modern resume builder that uses artificial intelligence to help job seekers create clean, professional CVs in minutes. It solves the problem of poor resume formatting, long creation time, and lack of career guidance by generating personalized, ready-to-use resumes instantly.",
      link: "https://github.com/sir-hillary/PERFECTME-RESUME-BUILDER",
      demo: "https://kuzacareer.vercel.app",
      completed: false,
      image: kuza_career,
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "AI Integration",
        "PDF Generation",
      ],
      category: "AI Application",
    },
    {
      title: "Secure MERN Authentication System",
      description:
        "A full-stack authentication solution with JWT login, email verification, and password reset. Built with React, Tailwind CSS, Node.js, Express, and MongoDB, it delivers a secure and seamless user experience for modern web apps.",
      link: "https://github.com/sir-hillary/MERN-AUTH",
      demo: "https://mern-auth-six-eta.vercel.app",
      completed: true,
      image: mern_auth,
      techStack: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "Email Service",
      ],
      category: "Authentication System",
    },
  ],
  design: [
    {
      title: "Jackies Pharmaceuticals logo design",
      description:
        "A Canva-designed jackie's pharmaceuticals for a website i designed",
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
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/sirhillary-tech-13827a21b",
    label: "LinkedIn",
    color: "hover:text-blue-400",
  },
  {
    icon: FaGithub,
    href: "https://github.com/sir-hillary",
    label: "GitHub",
    color: "hover:text-gray-300",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/profile.php?id=100075875217577",
    label: "Twitter",
    color: "hover:text-sky-400",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/2547101703739",
    label: "WhatsApp",
    color: "hover:text-green-400",
  },
];

export const contactInfo = [
  {
    icon: FaEnvelope,
    text: "h.o.omondi15@gmail.com",
    href: "mailto:h.o.omondi15@gmail.com",
    label: "Email",
  },
  {
    icon: FaPhone,
    text: "+2547101703739",
    href: "tel:+2547101703739",
    label: "Phone",
  },
  {
    icon: FaMapMarkerAlt,
    text: "Embakasi, Nairobi, Kenya",
    href: "#",
    label: "Location",
  },
  {
    icon: FaGlobe,
    text: "www.sirhillarytech.vercel.app",
    href: "https://sirhillarytech.vercel.app",
    label: "Website",
  },
];

export const services = [
  { name: "Web Development", href: "#" },
  { name: "Mobile Apps", href: "#" },
  { name: "UI/UX Design", href: "#" },
  { name: "Cloud Solutions", href: "#" },
  { name: "DevOps", href: "#" },
];

export const analytics = [
  {
    value: projects.development.length,
    label: "Total Projects",
    icon: Layers,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    value: projects.development.filter((p) => p.completed).length,
    label: "Completed",
    icon: CheckCircle,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
  },
  {
    value: projects.development.filter((p) => !p.completed).length,
    label: "In Progress",
    icon: Clock,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    value: Math.floor(
      (projects.development.reduce(
        (acc, p) => acc + (p.completed ? 1 : 0.5),
        0
      ) /
        projects.development.length) *
        100
    ),
    label: "Success Rate",
    icon: Zap,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
  },
];

export const skills = [
  { name: "React.js", icon: Globe, category: "Frontend" },
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "Express.js", icon: Server, category: "Backend" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Docker", icon: Server, category: "DevOps" },
  { name: "Tailwind CSS", icon: Globe, category: "Frontend" },
  { name: "Git & GitHub", icon: Code2, category: "Tools" },
  { name: "REST APIs", icon: Server, category: "Backend" },
  { name: "GraphQL", icon: Server, category: "Backend" },
];

export const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "We focus on delivering pixel-perfect implementations and clean code architecture.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to understand their vision and exceed expectations.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description:
      "Leveraging cutting-edge technologies to create forward-thinking solutions.",
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description:
      "Committed to delivering robust, scalable, and maintainable software.",
  },
];

export const stats = [
  { value: "25+", label: "Projects Delivered", icon: Award },
  { value: "3+", label: "Years Experience", icon: Clock },
  { value: "100%", label: "Client Satisfaction", icon: Users },
  { value: "50k+", label: "Lines of Code", icon: Code2 },
];

export const myServices = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Building modern, scalable web applications using React, Next.js, and modern JavaScript frameworks.",
    features: ["React.js", "Next.js", "TypeScript", "Responsive Design"],
    category: "Development",
    color: "from-primary to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description:
      "Creating robust, secure backend systems with Node.js, Express, and microservices architecture.",
    features: ["Node.js", "REST APIs", "GraphQL", "Microservices"],
    category: "Development",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Designing and implementing efficient database architectures for optimal performance.",
    features: ["MongoDB", "PostgreSQL", "Redis", "Data Modeling"],
    category: "Infrastructure",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications with React Native for iOS and Android.",
    features: ["React Native", "iOS", "Android", "App Store Deployment"],
    category: "Development",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
    features: ["AWS", "Docker", "CI/CD", "Infrastructure"],
    category: "Infrastructure",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-centered designs that enhance user experience and engagement.",
    features: ["Figma", "Prototyping", "User Research", "Design Systems"],
    category: "Design",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Implementing security best practices and compliance standards for enterprise applications.",
    features: ["JWT Auth", "OAuth", "Data Encryption", "Security Audits"],
    category: "Security",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description:
      "Optimizing applications for speed, scalability, and optimal user experience.",
    features: ["Code Splitting", "Caching", "Load Balancing", "Monitoring"],
    category: "Optimization",
    color: "from-yellow-500 to-green-500",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We analyze your requirements and plan the optimal technical approach.",
    icon: Layers,
  },
  {
    step: "02",
    title: "Design & Prototyping",
    description:
      "Creating wireframes and prototypes to visualize the final product.",
    icon: Palette,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Agile development with regular updates and milestone deliveries.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Testing & Quality",
    description:
      "Rigorous testing to ensure performance, security, and reliability.",
    icon: Shield,
  },
  {
    step: "05",
    title: "Deployment",
    description: "Smooth deployment with monitoring and post-launch support.",
    icon: Rocket,
  },
  {
    step: "06",
    title: "Maintenance",
    description: "Ongoing support, updates, and performance optimization.",
    icon: Clock,
  },
];

export const keyFeatures = [
  {
    icon: Shield,
    title: "Secure by Design",
    description: "Built-in security protocols and best practices from day one",
    color: "text-cyan-400",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    description: "Architected for growth with optimal performance",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimized",
    description: "Lightning-fast applications with minimal latency",
    color: "text-primary",
  },
  {
    icon: Users,
    title: "User-Focused",
    description: "Intuitive interfaces that enhance user experience",
    color: "text-green-400",
  },
];

export const techStack = [
  { icon: Globe, name: "React", description: "Frontend Development" },
  { icon: Server, name: "Node.js", description: "Backend Services" },
  { icon: Database, name: "MongoDB", description: "Database Solutions" },
  { icon: Smartphone, name: "React Native", description: "Mobile Apps" },
  { icon: Cloud, name: "AWS", description: "Cloud Infrastructure" },
  { icon: Code, name: "TypeScript", description: "Type Safety" },
];

export const clientStats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "25+", label: "Projects Delivered" },
  { value: "4+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export const solutions = [
  {
    icon: Lock,
    title: "Security First",
    description:
      "Every project follows security best practices with regular audits and compliance checks.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Scalable architecture designed to grow with your business needs.",
  },
  {
    icon: Sparkles,
    title: "Modern Solutions",
    description:
      "Using cutting-edge technologies to create innovative digital experiences.",
  },
];
